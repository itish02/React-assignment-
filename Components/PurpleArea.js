import './PurpleArea.css';
import Icon from './Icons/Icons';
import Icon2 from './Icons/Icon2';
import Icon3 from './Icons/Icon3';
import Icon4 from './Icons/Icon4';
import AssetIcon from './Icons/AssetIcon';

const ParentDiv = () => {
    return (
        <div className='parent'>
            <div className='container container-1'>
                <AssetIcon className = "asset" />
                <div className="title">
                    <p>A D S O U L</p>
                </div>
            </div>
            <div className="container container-2">
                <div className='cont-text'>
                    <p>Revenue Optimization</p>
                </div>
                <div className='feat-1'>
                    <Icon className='icon fill-rate' />
                    <div className='cont cont-text2'>
                        <p>Fill rate</p>
                    </div>
                </div>
                <div className = 'feat-2'>
                    <Icon2 className='icon icon-2' />
                    <div className="cont cont-text3">
                        <p>Improve-ctr</p>
                    </div>
                </div>
                <div className="feat-3">
                    <Icon3 className = 'icon icon-3'/>
                    <div className="cont cont-text4">
                        <p>Refresh Rate</p>
                    </div>
                </div>
                <div className = 'feat-4'>
                    <Icon4 className='icon icon-4' />
                    <div className="cont cont-text5">
                        <p>Quick Integration</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ParentDiv;