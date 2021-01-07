
import {createMuiTheme} from "@material-ui/core/styles";
import {deepOrange,teal} from "@material-ui/core/colors";

const Theme=createMuiTheme({
    palette:{
        primary:{
            main: deepOrange[500]
        },
        secondary:{
            main:teal[500]
        }
    }
})

export default Theme;