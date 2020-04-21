export const unreadMessagesCount = state => state.messages.main.length
export const unreadNotificationsCount = state => state.notifications.main.length
export const remainTasksCount = state => state.tasks.main.length
export const currentUser = state => state.user.main
export const user = state => state.user
export const character = state => state.character
export const corporation = state => state.corporation
export let alliance = state => state.alliance
export let allianceId = state => state.alliance.id
export const totalProduct = state => state.products.main
