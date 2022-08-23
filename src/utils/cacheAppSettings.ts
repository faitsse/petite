import type { UnwrapNestedRefs } from 'vue'
import { appStorageKeyEnum } from '~/enum'
import type { ConfigSettingObject } from '~/config'

const APP_SETTINGS_KEY = appStorageKeyEnum.appSettings
export function initAppSettings() {
  const appSettingsStorage = ref()

  const initStorage = () => {
    appSettingsStorage.value = useStorage(APP_SETTINGS_KEY, {}, localStorage)
  }

  const cacheSettingsOnStorage = (settings = {}) => {
    if (!appSettingsStorage.value)
      return
    appSettingsStorage.value = settings
  }

  const updateSettingsFromStorage = (target: UnwrapNestedRefs<ConfigSettingObject>) => {
    const source = appSettingsStorage.value

    if (!source || !Object.keys(source).length)
      return { ...target }

    return {
      ...target,
      ...source,
    }
  }

  return {
    initStorage,
    cacheSettingsOnStorage,
    updateSettingsFromStorage,
  }
}
