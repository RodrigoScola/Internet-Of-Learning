import React from "react"
import { Toaster } from "react-hot-toast"
import { ElementSelect } from "./CategorySelect"
import { ImageInput, Input } from "./input"
import { LoadHighlights } from "./ui/LoadHighlights"

export const CourseForm = ({
	bannerImage,
	formState,
	fileChoose: courseImage,
	profileImage,
	categories,
	owninformation,
	setOwnInfo,
	setFormState,
	changeImage,
	highlights,
	setHighlights,
}) => {
	const handleChange = (e) => {
		setFormState({ [e.target.name]: e.target.value })
	}

	return (
		<>
			<form onSubmit={(e) => e.preventDefault()} class="gridcol-2 formInput">
				<Input
					required={true}
					className="griditem-1-2"
					name={"courseName"}
					headerText="Course Name"
					onChange={handleChange}
					value={formState.courseName}
					placeholder="what is the name of the course?"
				/>
				<Input
					value={formState.coursePublisher}
					name={"coursePublisher"}
					headerText="Course Publisher"
					onChange={handleChange}
					placeholder="Is the course self published or part of a platfrom"
				/>

				<ImageInput
					headerText="Course Image"
					imageType={"image"}
					imageLink={formState.courseImage}
					imageRef={courseImage.current}
				/>

				<ImageInput
					headerText="Course Banner"
					imageType={"banner"}
					imageLink={formState.courseBanner}
					imageRef={bannerImage.current}
				/>
				<Input
					name={"courseLink"}
					onChange={handleChange}
					className="griditem-1-2"
					headerText="Course Link"
					value={formState.courseLink}
					placeholder="Is the Course self published or part of a platform"
					type="url"
				/>
				<div className="griditem-1-2">
					<ElementSelect
						defaultSelected={categories.filter(
							(item) => formState.courseCategory.indexOf(item.id) != -1
						)}
						elements={categories}
						setElements={(e) =>
							setFormState({
								courseCategory: e,
							})
						}
					/>
				</div>
				{/* 				
				<label>
					<p class="text-title text-xsm bold">Course Category</p>
					<select value={formState.courseCategory} name="courseCategory" onChange={handleChange}>
						<option>Other</option>
						{categories.map((v, i) => {
							return <option value={v.id}>{v.name.replace("&amp;", "&")}</option>
						})}
					</select>
				</label>
				<label>
					<p class="text-title text-xsm bold">Course Parent Category</p>
					<select
						value={formState.courseParentCategory}
						name="courseParentCategory"
						onChange={handleChange}
					>
						<option>Other</option>
						{categories.map((v, i) => {
							return <option value={v.id}>{v.name.replace("&amp;", "&")}</option>
						})}
					</select>
				</label> */}
				<label>
					<p class="text-title text-xsm bold">Course Entry Level</p>
					<select value={formState.courseEntryLevel} name="courseEntryLevel" onChange={handleChange}>
						<option value={"Beginner"}>Beginner</option>
						<option value={"Intermediate"}>Intermediate</option>
						<option value={"Advanced"}>Advanced</option>
					</select>
				</label>
				<Input
					name={"courseTimeInvestment"}
					className=""
					value={formState.courseTimeInvestment}
					headerText="Time investment"
					onChange={handleChange}
					type="number"
					min="1"
					placeholder="How many hours does the course take to complete"
				/>
				<label class="griditem-1-2">
					<p class="text-title text-xsm bold">
						Add a description of your course (limited to 280 characters)
					</p>
					<textarea
						value={formState.courseDescription}
						maxLength={"280"}
						name="courseDescription"
						onChange={handleChange}
					></textarea>
				</label>

				<Input
					name={"courseValue"}
					className="griditem-1-2"
					headerText="What value your course is for it’s students"
					onChange={handleChange}
					value={formState.courseValue}
					placeholder="Decribe in one senctence what value your course is providing "
				/>

				<Input
					name={"courseOutcome"}
					required={true}
					value={formState.courseOutcome}
					className="griditem-1-2"
					headerText="What is the outcome most ex-students have from taking the course"
					onChange={handleChange}
					placeholder="Decribe what the outcome is for most of the students finishing the course"
				/>

				<div class="griditem-1-2">
					<p class="text-title text-xsm bold">Name up to six highlights of the course</p>

					<LoadHighlights highlights={highlights} setHighlights={setHighlights} />
				</div>

				<section class="griditem-1-2 ">
					<p class="text-title text-xsm bold">About the Instructor(s)</p>
					<p class="text-sm text-title bold  ">
						Here you can add information related to the instructor(s)
					</p>
				</section>
				{/* <label className="inline griditem-1-2">
					<input
						onChange={() => {
							setOwnInfo(!owninformation)
						}}
						defaultChecked
						type="checkbox"
						name="terms"
						class="inline"
					/>{" "}
					Use My Own information
				</label> */}
				{owninformation == true ? (
					<>
						{" "}
						<Input
							name={"instructorName"}
							headerText="What is the name of the instructor?"
							onChange={handleChange}
							placeholder="What is the name(s) of the instructors (add a comma to separate them)"
							value={formState.instructorName}
						/>
						<ImageInput
							imageType="avatar"
							headerText="Course Instructor Image"
							imageLink={formState.instructorImage}
							imageRef={profileImage.current}
						/>
						<label class="griditem-1-2">
							<p class="text-title text-xsm bold">What is the experience of the Instructor?</p>

							<textarea
								value={formState.instructorExperience}
								maxLength={"280"}
								name="instructorExperience"
								onChange={handleChange}
								rows="5"
								placeholder="Describe the instructor(s) experience with the course subject"
							></textarea>
						</label>
					</>
				) : null}
			</form>
			<Toaster />
		</>
	)
}
