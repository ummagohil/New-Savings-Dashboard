import React, { useEffect } from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'
import { useSelector, useDispatch } from 'react-redux'
import { categoryData } from '../../store/actions/data.actions'

const Graph = () => {
	const dispatch = useDispatch()

	const categories = useSelector(state => state.data.category)

	useEffect(() => {
		dispatch(categoryData())
	}, [dispatch])

	console.log(categories)

	const transform = (arr) =>
    Object.entries(arr).reduce((acc,[k,[v]]) => (acc[k] = v, acc), {})

	const test = transform(categories)

	console.log(test)

	const data = [
		{
			name: 'Page A',
			uv: 4000,
			pv: 2400,
			amt: 2400
		},
		{
			name: 'Page B',
			uv: 3000,
			pv: 1398,
			amt: 2210
		},
		{
			name: 'Page C',
			uv: 2000,
			pv: 9800,
			amt: 2290
		},
		{
			name: 'Page D',
			uv: 2780,
			pv: 3908,
			amt: 2000
		},
		{
			name: 'Page E',
			uv: 1890,
			pv: 4800,
			amt: 2181
		},
		{
			name: 'Page F',
			uv: 2390,
			pv: 3800,
			amt: 2500
		},
		{
			name: 'Page G',
			uv: 3490,
			pv: 4300,
			amt: 2100
		}
	]
	const result = Object.keys(categories).reduce(function (r, k) {
        return r.concat(categories[k]);
	}, []);
console.log(result);

const test2 = Object.keys(categories)
console.log(...test2)

const test100 = {...test2}

const transform2 = (arr) =>
    Object.entries(arr).reduce((acc,[k,[v]]) => (acc[k] = v, acc), {})

	const test3 = transform2(test2)

	console.log(test3)
	return (
		<LineChart
		width={500}
		height={300}
		data={result}
		margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
		>
		<Line type="monotone" dataKey="value" stroke="#8884d8" />
		<CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
		<XAxis interval={0} angle={-65} dataKey={test100} />
		<YAxis />
		<Tooltip />
	</LineChart>

	)
}

export default Graph
