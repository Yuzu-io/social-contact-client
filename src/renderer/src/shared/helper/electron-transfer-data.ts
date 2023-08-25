const { ipcRenderer } = window.electron

class ElectronTransferDataHelper {
  sendUserInfoData(data: string) {
    ipcRenderer.invoke('send:user:info:data', data)
  }

  getUserInfoData() {
    return ipcRenderer.invoke('get:user:info:data')
  }
}

export default new ElectronTransferDataHelper()
