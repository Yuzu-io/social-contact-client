import { UserInfo } from '@/types/index'

const { ipcRenderer } = window.electron

class TransferUserInfoDataHelper {
  sendUserInfoData(data: UserInfo) {
    ipcRenderer.invoke('send:user:info:data', data)
  }

  getUserInfoData() {
    return ipcRenderer.invoke('get:user:info:data')
  }
}

export default new TransferUserInfoDataHelper()
