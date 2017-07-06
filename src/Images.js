import React from 'react';

function Images(props){
	// Map through images
	var array = []
	props.img.map((images, index)=>{
		array.push(
			<img key={index} src={images} alt='meh' />
		)
		return 'meh'
	})
	return(
		<div className='meh'>
			{array}
		</div>
	)
}

export default Images;