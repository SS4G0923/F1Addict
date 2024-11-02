import { Transition } from 'react-transition-group';
import PropTypes from 'prop-types';
import ScheduleDetail from './bannerDetail/scheduleDetail';

export default function BannerDetail({isShowSchedule, schedule}) {
    return(
        <>
            <div className="bannerDetail" style={{position: 'relative', zIndex: 1}}>
                {isShowSchedule && (
                    <Transition in={true} timeout={500}>
                        <ScheduleDetail schedule={schedule}/>
                    </Transition>
                )}
            </div>
        </>
    )

}

BannerDetail.propTypes = {
    isShowSchedule: PropTypes.bool.isRequired,
    schedule: PropTypes.array.isRequired
};