import { Transition } from 'react-transition-group';
import PropTypes from 'prop-types';
import ScheduleDetail from './bannerDetail/scheduleDetail';

export default function BannerDetail({isShowSchedule}) {
    return(
        <>
            <div className="bannerDetail" style={{position: 'relative', zIndex: 1}}>
                {isShowSchedule && (
                    <Transition timeout={500}>
                        <ScheduleDetail/>
                    </Transition>
                )}
            </div>
        </>
    )

}

BannerDetail.propTypes = {
    isShowSchedule: PropTypes.bool.isRequired,
};