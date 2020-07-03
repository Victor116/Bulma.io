import { ToastProgrammatic as Toast } from 'buefy/dist/components/toast'

export const state = () => ({
  menu_vertical: false
})

export const mutations = {
	setMenuVertical (state, menu_vertical) {
    state.menu_vertical = menu_vertical
  }
}

export const actions = {

}