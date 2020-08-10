import { makeStyles } from '@material-ui/core'

export const useFormStyles = makeStyles((theme) => ({
    root: {
        minWidth: '25vw', 
	    maxWidth: '50vw',
		textAlign: 'center' 
    },
    paper: {
        margin: 'auto 1rem auto 1rem', 
        padding: '2rem 3rem', 
        flex: 1, 
    },
    textField: {
        maxWidth: '30rem', 
    }
}))

export default useFormStyles 