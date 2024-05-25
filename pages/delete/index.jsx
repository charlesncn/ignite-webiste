// Sections
import DeleteAccount from '../../components/sections/delete/deleteAcc'

import Color  from '../../components/utils/page.colors.util'

import colors from '../../content/privacy/_colors.json'

//
export default function Projects({ user, repos }) {
	return (
		<>
		<Color colors={colors} />
		<DeleteAccount/>
		</>
	)
}
