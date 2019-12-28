import React from 'react'
import NavTest from '../components/NavTest'
import PropTypes from 'prop-types'

const propTypes = {
	children: PropTypes.node
}

const Page = ({ route, children }) => {
	return (
		<div class="flex content-between flex-wrap  h-5">
			<NavTest route={route} />
			<div class="w-full h-2  pl-20 pr-2">{children}</div>
		</div>
	)
}

Page.propTypes = propTypes

export default Page
