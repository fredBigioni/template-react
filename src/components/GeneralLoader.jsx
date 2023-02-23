import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from 'react-redux';

export const GeneralLoader = () => {

    const { isLoading } = useSelector(state => state.general);

    return (
        <>
            <fieldset className={isLoading ? 'isLoadingProcess' : 'isNotLoadingProcess'}>
                <CircularProgress disableShrink />
            </fieldset>
        </>
    );

}
