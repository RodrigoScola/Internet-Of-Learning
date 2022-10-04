import React, { useState, useEffect, useRef } from 'react';
import ReactDom from 'react-dom';
import { useObj } from './hooks/useObj';
import apiFetch from '@wordpress/api-fetch';
import { CourseForm } from './components/courseForm';
import { Toast } from 'react-hot-toast';
import { formatter, form } from '../utils';
import { Course } from './hooks/Course';

var course;
window.addEventListener( 'load', () => {
	const params = formatter.getPageParams();
	course = new Course( params.courseid );
	const div = document.querySelectorAll( '.course-settings' );
	div.forEach( ( elem ) => {
		ReactDom.render( <RenderComponent />, elem );
	} );
} );
function RenderComponent() {
	const [ sent, setSent ] = useState( false );
	const courseImage = useRef();
	const bannerImage = useRef();
	const profileImage = useRef();
	const submitForm = useRef();
	const [ currImages, setImages ] = useObj( {
		currCourseImage: '',
	} );
	const [ categories, setCategories ] = useState( [] );
	const [ owninformation, setOwnInfo ] = useState( true );
	const [ formState, setFormState ] = useObj( {} );
	const publishCourse = async () => {
		const highlights = formatter.highlights( formState.courseHighlights );
		setSent( true );
		const data = await apiFetch( {
			url: '/wp-json/iol/v1/courses',
			data: {
				...formState,
				courseHighlights: highlights,
				courseId: course.id,
			},
			method: 'POST',
			headers: {
				'X-WP-Nonce': ioldata.nonce,
			},
		} ).then( ( res ) => {
			document.querySelector( '#courseId' ).value = res;
			submitForm.current.click();
		} );
	};
	/**
	 *
	 *
	 * @param {('draft'|'publish'|'private')} visibility
	 */
	const newVisibility = async ( visibility ) => {
		setSent( true );
		course.changeVisibility( visibility ).then( ( res ) => {
			document.querySelector( '#courseId' ).value = res;
			submitForm.current.click();
		} );
	};

	useEffect( () => {
		if ( course.id ) {
			const fetchData = async () => {
				const cat = await apiFetch( {
					path: `/wp/v2/categories`,
					method: 'GET',
					headers: {
						'X-WP-Nonce': ioldata.nonce,
					},
				} );
				if ( cat ) {
					setCategories( cat );
				}
				const curr = await apiFetch( {
					path: '/wp/v2/courses/' + course.id,
					method: 'GET',
					headers: {
						'X-WP-Nonce': ioldata.nonce,
					},
				} );
				if ( curr ) {
					const highlights = curr.acf.course_highlights;
					setFormState( {
						courseName: curr.title.rendered,
						coursePublisher: 'self',
						courseLink: curr.acf.course_link,
						courseCategory: curr.categories,

						courseDescription: curr.content.rendered,
						courseHighlights: formatter.highlightsToArr(
							curr.acf.course_highlights
						),
						courseTimeInvestment: curr.acf.time_investment,
						instructorName: curr.acf.instructor_name,
						instructorExperience: curr.acf.instructor_description,
						instructorImage: curr.acf.instructor_image,
						courseImage: curr.image_slug.card,
						postType: curr.status,
						courseBanner: curr.acf.course_banner,
						courseOutcome: curr.acf.course_outcome,
						courseValue: curr.acf.course_value,
					} );
				}
			};
			fetchData();
		}
	}, [ course.id ] );
	const changeImage = ( e ) => {
		setFormState( { [ e.target.name ]: [ ...e.target.files ] } );
	};
	return (
		<>
			{ ' ' }
			{ formState.courseName && (
				<CourseForm
					highlights={ formState.courseHighlights }
					setHighlights={ ( e ) =>
						setFormState( { courseHighlights: e } )
					}
					currImages={ currImages }
					changeImage={ changeImage }
					fileChoose={ courseImage }
					formState={ formState }
					categories={ categories }
					bannerImage={ bannerImage }
					profileImage={ profileImage }
					setCategories={ setCategories }
					owninformation={ owninformation }
					setOwnInfo={ setOwnInfo }
					setFormState={ setFormState }
				/>
			) }
			<div className="clearfix">
				<form
					action={ `/new-course` }
					method="post"
					enctype="multipart/form-data"
				>
					<input
						onChange={ changeImage }
						name={ 'courseId' }
						className="invisible"
						id="courseId"
					/>
					<input
						type="file"
						onChange={ changeImage }
						name={ 'courseImage' }
						className="invisible"
						ref={ courseImage }
					/>
					<input
						type="file"
						onChange={ changeImage }
						name={ 'instructorImage' }
						className="invisible"
						ref={ profileImage }
					/>
					<input
						type="file"
						onChange={ changeImage }
						name={ 'courseBanner' }
						className="invisible"
						ref={ bannerImage }
					/>
					<button
						ref={ submitForm }
						className="invisible "
						id="submitform"
					>
						submit
					</button>
				</form>
				<>
					<button
						disabled={ sent == true }
						onClick={ publishCourse }
						className={ 'btn btn-yellow bold griditem-2 m-1 right' }
					>
						Save information
					</button>
					<button
						disabled={ sent == true }
						onClick={ () => course.deleteCourse() }
						className={
							'btn btn-red-hollow  bold griditem-2 m-1 right'
						}
					>
						Delete Course
					</button>
					{ formState.postType == 'publish' ? (
						<button
							onClick={ ( e ) => newVisibility( 'draft' ) }
							className="btn btn-blue-hollow bold griditem-2 m-1 right"
						>
							Delist Course
						</button>
					) : (
						<button
							onClick={ ( e ) => newVisibility( 'publish' ) }
							className="btn btn-blue-hollow bold griditem-2 m-1 right"
						>
							list Course
						</button>
					) }
				</>
			</div>
		</>
	);
}
