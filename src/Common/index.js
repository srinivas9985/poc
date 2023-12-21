const { Image } = require("react-native")

export const icons = {
    home: Image.resolveAssetSource(require('../../assets/home.png')),
    homeunselect: Image.resolveAssetSource(require('../../assets/homeunselect.png')),
    searchunselect: Image.resolveAssetSource(require('../../assets/searchunselect.png')),
    search: Image.resolveAssetSource(require('../../assets/search.png')),
    account: Image.resolveAssetSource(require('../../assets/user.png')),
    accountunselect: Image.resolveAssetSource(require('../../assets/userunselect.png')),
    back: Image.resolveAssetSource(require('../../assets/back.png')),
    userIcon: Image.resolveAssetSource(require('../../assets/loguser.png')),

}
