import React,{ useEffect, useState} from 'react';
import { Icon } from './Icon';

export const CoursePreview = ({formState , }) => {
     const {courseName,coursePublisher,
		courseLink,courseCategory, courseParentCategory,
		courseEntryLevel, courseTimeInvestment,	courseImage,
		courseVideo,courseBanner,courseDescription,courseValue,courseOutcome,
		courseHighlights, instructorImage,
		instructorName,instructorExperience } = formState
	const [mainImage, setMainImage] = useState([])
	const [instructorImg,setInstructorImg] = useState([])
	useEffect(() => {
	
		if (courseImage[0] && typeof courseImage == 'object') {
			const url = URL.createObjectURL(courseImage[0]);
			setMainImage(url)
		} 
		
	},[courseImage])	
	
useEffect(() => {
	if (instructorImage[0] && typeof instructorImage == 'object') {
		const url = URL.createObjectURL(instructorImage[0])
		setInstructorImg(url)
	} else {
		setInstructorImg(instructorImage)
	}
}, [instructorImage])

     return (
		<>
		<div id="course">
			<article class="course">
				<article class="content">
					<p>
						Your courses <i class="bi bi-chevron-right"></i> List a course
					</p>
					<h1 class="text-title bold w-70 text-md">{formState.courseName}</h1>
					<aside class="inlineflex inlineflex-between w-80">
						<div>
							<svg
								width="10"
								height="10"
								viewBox="0 0 10 10"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M5 0C2.25 0 0 2.25 0 5C0 7.75 2.25 10 5 10C7.75 10 10 7.75 10 5C10 2.25 7.75 0 5 0ZM7.1 7.1L4.5 5.5V2.5H5.25V5.1L7.5 6.45L7.1 7.1Z"
									fill="#282828"
								/>
							</svg>
							{courseTimeInvestment} hours
						</div>
						<div>
							<Icon iconName={courseEntryLevel} />
							{`  ${courseEntryLevel}`}
						</div>
						<div>
							<span class="dashicons dashicons-admin-site-alt3"></span> English
						</div>
					</aside>
					<aside class=" mv-1">Course teacher: {instructorName}</aside>
					<section class="mb-1">
						<button class="btn p-08 btn-blue btn-round_semi white">The Course</button>
						<span class="p-08 greenwhite">The Instructor</span>
						<span class="p-08 greenwhite">Reviews</span>
					</section>
					<img id="main-course-image" class=" ml-07 container container-sharp p-06" src={mainImage} />
					<section class="container">
						<p class="text-title text-sm bold ph-1 ">What are you going to get</p>
						<ul class="min-list pl-1 gridcol-2 w-80">
							{courseHighlights.map((v) => {
								return (
									<li>
										<span class="icon  mh-03 dashicons blue dashicons-yes-alt"></span>
										{v}
									</li>
								)
							})}
						</ul>
					</section>
					<div class="w-100 h-10 mv-2 bg-gray image-fit">
						<img src={mainImage} />
					</div>
					<section class="container p-1">
						<p class="text-title bold text-sm pt-01 ">Course description</p>
						<p>{courseDescription}</p>
					</section>
					<section class="container p-1 mv-1">
						<p class="text-title text-sm  bold">About the Instructor</p>
						<div class="profile-card">
							<img class="profile-image center-image" src={instructorImg} />
							<p class="profile-description">{instructorExperience}</p>
						</div>
					</section>

					<section class="gridcol-3 mb-2 gap"></section>
				</article>
				<article class="navigation-bar">

					<section class="mt-2 p-1 container container-sharp">
						<img src={mainImage} />
						<div class="inlineflex"></div>

						<div class="mt-04 flex flex-row flex-evenly">
							<div>
								<svg
									width="10"
									height="10"
									viewBox="0 0 10 10"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M5 0C2.25 0 0 2.25 0 5C0 7.75 2.25 10 5 10C7.75 10 10 7.75 10 5C10 2.25 7.75 0 5 0ZM7.1 7.1L4.5 5.5V2.5H5.25V5.1L7.5 6.45L7.1 7.1Z"
										fill="#282828"
									/>
								</svg>{" "}
								{courseTimeInvestment} hours
							</div>
							<div>
								<Icon iconName={courseEntryLevel} />
								{`  ${courseEntryLevel}`}
							</div>
							<div>
								<span class="dashicons dashicons-admin-site-alt3"></span> English
							</div>
						</div>

						<section>
							<p class="text-title text-xsm bold">What are you going to learn</p>
							<ul class="min-list p-0">
								{courseHighlights.map((v) => {
									return (
										<li>
											<span class="icon  mh-03 dashicons blue dashicons-yes-alt"></span>
											{v}
										</li>
									)
								})}
							</ul>
							<aside className="flex flex-col flex-left">
								<p class="text-title text-xsm bold left">Actions</p>
								<p class="subtitle subtitle-xsm  left">title action</p>
								<a class="blue underline" href="# ">
									title link
								</a>
							</aside>
						</section>
						<div>
							<button class="w-100 btn btn-yellow text-center bold mt-1">Go to the course1</button>
						</div>
					</section>
				</article>
			</article>
		</div>
		</>
	)
}