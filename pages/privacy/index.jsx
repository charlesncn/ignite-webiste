// Sections
import PrivacyPolicies from '../../components/sections/privacy/privacy'

import Color  from '../../components/utils/page.colors.util'

import colors from '../../content/privacy/_colors.json'

//
export default function Projects({ user, repos }) {
	return (
		<>
		<Color colors={colors} />
		<PrivacyPolicies />
		</>
	)
}
