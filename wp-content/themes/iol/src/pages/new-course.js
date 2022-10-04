import React, { useState, useEffect, useRef } from 'react';
import ReactDom from 'react-dom';
import { useObj } from './hooks/useObj';
import apiFetch from '@wordpress/api-fetch';
import { CourseForm } from './components/courseForm';
import { CoursePreview } from './components/newCoursePreview';
import { StepItem } from './components/ui/steps';
import { Course } from './hooks/Course';
const { getDefaultItems } = new Course();
import { form } from '../utils';
window.addEventListener( 'load', () => {
	const div = document.querySelectorAll( '.new-course' );
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

	//
	const [ categories, setCategories ] = useState( [] );
	const [ step, setStep ] = useState( 0 );
	const [ owninformation, setOwnInfo ] = useState( true );
	const [formState, setFormState] = useObj(getDefaultItems({
		filled: false
	}));
	useEffect( () => {
		setSent( form.filledFields( formState ).length !== 0 );
	}, [ formState ] );

	const publishCourse = async () => {
		setSent( true );
		const courseHighlightsMap = formState.courseHighlights.map(
			( v, i ) => {
				return {
					id: i,
					value: v,
				};
			}
		);
		const data = await apiFetch( {
			url: '/wp-json/iol/v1/courses',
			data: { ...formState, courseHighlights: courseHighlightsMap },
			method: 'POST',
			headers: {
				'X-WP-Nonce': ioldata.nonce,
			},
		} ).then( ( res ) => {
			document.querySelector( '#courseId' ).value = res;
			submitForm.current.click();
		} );
	};

	useEffect( () => {
	const fetchData = async () => {
			const data = await apiFetch( {
				path: `/wp/v2/categories`,
				method: 'GET',
				headers: {
					'X-WP-Nonce': ioldata.nonce,
				},
			} );
		if (data) {
				setCategories( data.filter(item => item.name !== 'Blog') );
			}
		};
		fetchData();
		const div = document.querySelectorAll( '.new-course' );
		setFormState( {
			instructorImage: div[ 0 ].getAttribute( 'data-author' ),
		} );
	}, [] );

	const changeImage = ( e ) => {
		setFormState( { [ e.target.name ]: [ ...e.target.files ] } );
	};

	return (
		<>
			<div className="flex flex-row mt-3">
				<StepItem
					count={ 1 }
					title="About the Course"
					completed={ step > 0 }
					current={ step == 0 }
				/>
				<StepItem
					count={ 2 }
					title="course page Preview"
					completed={ step > 1 }
					current={ step == 1 }
				/>
			</div>
			{ step == 0 ? (
				<>
					<article>
						<section>
							<h1 class="text-title bold ">
								Getting your Course Listed on The Internet of
								Learning Will Help You React Your Potential
								Students Faster
							</h1>
							<p class="text-sm  bold">About the Course</p>
						</section>
						<section>
							<p class="text-sm ">
								Fill in all the information related to the
								course
							</p>
						</section>
					</article>{ ' ' }
					<CourseForm
						highlights={ formState.courseHighlights }
						setHighlights={ ( e ) =>
							setFormState( { courseHighlights: e } )
						}
						fileChoose={ courseImage }
						nextStep={ setStep }
						formState={ formState }
						categories={ categories }
						bannerImage={ bannerImage }
						profileImage={ profileImage }
						setCategories={ setCategories }
						owninformation={ owninformation }
						setOwnInfo={ setOwnInfo }
						setFormState={ setFormState }
					/>
				</>
			) : (
				<CoursePreview formState={ formState } />
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
				{ step == 0 ? (
					<button
						disabled={ false }
						onClick={ () => setStep( 1 ) }
						class="btn btn-yellow bold griditem-2 m-4 right"
					>
						SAVE AND LOOK AT THE COURSE PREVIEW
					</button>
				) : (
					<>
						<button
							disabled={ sent == true }
							onClick={ publishCourse }
							className={ `${
								step == 1
									? 'btn btn-yellow bold griditem-2 m-1 right'
									: 'invisible'
							}  ` }
						>
							Publish Course
						</button>
						<button
							onClick={ () => setStep( 0 ) }
							className="btn btn-blue-hollow bold griditem-2 m-1 right"
						>
							Edit Course information
						</button>
					</>
				) }
			</div>
		</>
	);
}
