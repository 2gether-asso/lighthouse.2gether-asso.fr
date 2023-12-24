import type { I18n, Diff } from '../type'

const locale =
{
	'What is {0}?': 'Qu\'est-ce que {0} ?',
	'Visit our website': 'Visite notre site web',
	'Join our Discord': 'Rejoins notre Discord',
	'Look at the TV': 'Regarde la télévision',
	'You are tired of waiting for official announcements and want to have clues about the next advances of 2GETHER? It\'s possible with 2GETHER LIGHTHOUSE:': 'Vous en avez marre d\'attendre les annonces officielles et souhaitez avoir des indices sur les prochaines avancées de 2GETHER ? C\'est possible avec 2GETHER LIGHTHOUSE :',
	'Access the secure direct line to the lighthouse and try to decrypt the transmissions to access exclusive content on 2GETHER!': 'Accédez à la ligne directe sécurisée vers le phare et tentez de décrypter les transmissions pour accéder à du contenu en avant première sur 2GETHER !',
} as const

// Static type check
export default locale satisfies
	// Check for missing keys:
	Readonly<Record<Diff<keyof I18n, keyof typeof locale>, string>> &
	// Check for extra keys:
	Readonly<Record<Diff<keyof typeof locale, keyof I18n>, never>>
