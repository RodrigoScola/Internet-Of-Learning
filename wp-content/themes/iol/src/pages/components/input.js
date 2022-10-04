import React from 'react'

import $ from 'jquery'



export const UploadFileButton = () => {
	return (
		<label class="right btn ph-1 pv-04 center-items ml-1 btn-yellow">
			<svg
				width="14"
				class="right"
				height="17"
				viewBox="0 0 14 17"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M4 13H10V7H14L7 0L0 7H4V13ZM7 2.83L9.17 5H8V11H6V5H4.83L7 2.83ZM0 15H14V17H0V15Z"
					fill="#282828"
				/>
			</svg>
		</label>
	)
}

export const  inputJquery =  {
	
	/**
	 * @param {('red'|'blue'|'yellow'|'transparent')} 
	 * @memberof inputJquery
	 */
	makeOutline(color = 'red') {
	$("form")
		.find(".input")
		.each(function () {
			if ($(this).prop("required")) {
				$(this).on({
					focusout: (e) => {
						if (e.target.value == "") {
							$(this).addClass("border-" + color)
						}
					},
					change: (e) => {
						
						if (e.target.value == "") {
							$(this).addClass("border border-" + color)
						} else {
							$(this).removeClass("border border-" + color)
						}
					},
				})
			}
		})
	}
}


export const Input = ({
     type = 'text', onChange, required = false, name,  placeholder = '', headerText = '', className = '', value, defaultValue =''
}) => {


     return (
		<>
			<label className={className}>
				<p class="text-title text-xsm bold">{headerText ? headerText : name}</p>
				<input  defaultValue={defaultValue} name={name} required={required} value={value} className='input' type={type} onChange={onChange} placeholder={placeholder} min='1'  />
			</label>
		</>
	)
}

/**
 * 
 * @param {Object} props 
//  * @param {('image'|'banner'|'avatar')} props.imageType 
 * @param {('ref.current')} props.imageRef
 * @param {string} props.headerText
 * @param {string} props.imageLink
 * @returns 
 */
export const ImageInput = ({
	imageType,
	imageRef,
	imageLink,
	headerText = ''
}
) => {
	if (imageType == 'image') {
		return (
			<label onClick={() => imageRef.click()}>
				<p class="text-title text-xsm bold">{headerText}</p>
				<div class="inputIcon course-image clearfix">
					{typeof imageLink != "object" ? (
						<div className="flex flex-between">
							<img className="" src={imageLink} />
						</div>
					) : (
						<>
							<input
								disabled
								value={
									imageRef?.files.length > 0
										? imageRef?.files[0].name
										: null
								}
							/>
							<div className="flex flex-between ">
								<img
									className=""
									src={
										imageRef?.files.length > 0
											? URL.createObjectURL(imageLink[0])
											: null
									}
								/>
							</div>
						</>
					)}
					<UploadFileButton />
				</div>
			</label>
		)
	}

	if (imageType == 'banner') {
		return (
			<label className="clearfix griditem-1-2  w-100" onClick={() => imageRef.click()}>
				<p class="text-title w-100 text-xsm bold">{headerText}</p>
				<div class="inputIcon course-banner clearfix ">
					{typeof imageLink == "string" ? (
						<div className="w-100 h-20 bg-gray image-fit">
							<img className="w-100" src={imageLink} />
						</div>
					) : (
						<div className="defaultBanner">
							<input
								className=""
								disabled
								value={imageRef?.files.length > 0 ? imageRef?.files[0].name : null}
							/>
							{imageRef?.files.length > 0 ? (
								<div className={`w-100  image-fit h-20`}>
									<img className="w-100 " src={URL.createObjectURL(imageLink[0])} />
								</div>
							) : null}
						</div>
					)}
					<UploadFileButton />
				</div>
			</label>
		)
	}
	if (imageType == 'avatar') {
		return (
			<label className="clearfix w-100" onClick={() => imageRef.click()}>
				<p class="text-title text-xsm bold">instructor Image Preview</p>
				<div class="inputIcon course-image avatar clearfix">
					{typeof imageLink == "string" ? (
						<div className="flex flex-between">
							<img className="profile-image" src={imageLink} />
						</div>
					) : (
						<>
							<input
								disabled
								value={
									imageRef?.files.length > 0
										? imageRef?.files[0].name
										: null
								}
							/>
							<div className="flex flex-between w-50">
								<img
									className="profile-image"
									src={
										imageRef?.files.length > 0
											? URL.createObjectURL(imageLink[0])
											: null
									}
								/>
							</div>
						</>
					)}
					<UploadFileButton />
				</div>
			</label>
		)
	}
	return <div>

	</div>

	
}

		
	
export const CategoryInput = ({categories, setCategories}) => {
	const [currCat, setCurrCat] = useState([]);
	
	
}