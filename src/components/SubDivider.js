import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
	children: PropTypes.node
}

const SubDivider = ({ children }) => {
	return (
		<div class="bg-white w-full -mt-5 z-0 font-light -ml-1 text-2xl">
			<div class="pt-5 pb-2">{children}</div>

			<hr />
		</div>
	)
}

SubDivider.propTypes = propTypes

export default SubDivider