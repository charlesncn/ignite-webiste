// Sections
import TermsofService from '../../components/sections/terms/terms'

import Color  from '../../components/utils/page.colors.util'

import colors from '../../content/privacy/_colors.json'

//
export default function Terms({ user, repos }) {
	return (
		<>
		<Color colors={colors} />
		<TermsofService />
		</>
	)
}
