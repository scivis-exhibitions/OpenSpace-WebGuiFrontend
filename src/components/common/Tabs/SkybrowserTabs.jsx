import React, { Component } from 'react';
import styles from './SkybrowserTabs.scss';
import Button from '../Input/Button/Button';
import MaterialIcon from '../MaterialIcon/MaterialIcon';
import { excludeKeys } from '../../../utils/helpers';
import PropTypes from 'prop-types';
import ScrollOverlay from '../../common/ScrollOverlay/ScrollOverlay';
import CenteredLabel from '../../common/CenteredLabel/CenteredLabel';
import { Resizable } from 're-resizable';
import uuid from "uuid";


class SkybrowserTabs extends Component {
    constructor(props) {
        super(props);
        this.createTabs = this.createTabs.bind(this);
        this.handleAddTab = this.handleAddTab.bind(this);
        this.handleSelectTab = this.handleSelectTab.bind(this);
        this.handleDeleteTab = this.handleDeleteTab.bind(this);
        this.setLockTargetMode = this.setLockTargetMode.bind(this);
    }

    get inheritedProps() {
        const doNotInclude = 'closeCallback className position size title';
        return excludeKeys(this.props, doNotInclude);
    }

    onResizeStop(e, direction, ref, delta) {
    }
    
    createTabs() {
        const { targets, currentTarget } = this.props;
   
        const allTabs = targets.map((tab, index) => {

            let targetcolor = 'rgb(' + tab.color + ')'; 
            return(
                
                <ul className={styles.tabHeader} key={index.toString()}>
                    <div
                     className={currentTarget === index.toString() ? styles.tabActive : styles.tab }
                     onClick={() => this.handleSelectTab(tab)}
                     >
                    <span style={{color: currentTarget === index.toString() ? targetcolor : ""}}>{"Skybrowser " + (index + 1).toString() }</span>
                    <Button onClick={() => this.setLockTargetMode } transparent small style={{padding: '4px'}}>
                        <MaterialIcon icon="lock" className="small" />
                    </Button>                
                    <Button onClick={() => this.handleDeleteTab(currentTarget)} transparent small style={{padding: '4px'}}>
                        <MaterialIcon icon="close" className="small"/>
                    </Button> 
                    
                    </div>
                </ul>
            );
        });
        return <div className={styles.navTabs}>{allTabs}</div>
    }

    handleSelectTab(tab) {
        // Call function handle from WWTPanel that is sent as a prop, to call Lua function Select Browser
    };
      
    handleAddTab() {
        // Call function handle from WWTPanel that is sent as a prop, to call Lua function createTargetBrowserPair
    };

    handleDeleteTab(tabToDelete) {
        // Call function handle from WWTPanel that is sent as a prop, to call Lua function removeTargetBrowserPair
    };

    setLockTargetMode() {
        // Call function handle from WWTPanel that is sent as a prop, to call Lua function lock or unlock
    };

    render() {
        const {data} = this.props;
        const EntryComponent = this.props.viewComponent;
        
        return(
            <section {...this.inheritedProps} className={styles.imageList}> 
                <div className={styles.well}>     
                {this.createTabs()}
                <div className={styles.tabContent}>      
                <Button className={styles.addTabButton} onClick={this.handleAddTab}>Add Skybrowser</Button> 
                    <ScrollOverlay> 
                        { data.length === 0 ? (
                            <CenteredLabel>
                                There are no loaded images in this Skybrowser. 
                            </CenteredLabel>

                        ) : (
                        <ul> 
                            { data.map(entry => (
                                <EntryComponent
                                {...entry}
                                {...this.props.viewComponentProps}
                                key={entry.identifier}
                                //onSelect={this.props.onSelect}
                                //active={this.props.active}
                                />
                            ))}
                        </ul> 
                        )}
                    </ScrollOverlay>             
                </div>
                </div>
            </section> 
        )      
    
    };

}

SkybrowserTabs.propTypes = {
    children: PropTypes.node,
    data: PropTypes.array.isRequired,
    viewComponent: PropTypes.elementType,
    viewComponentProps: PropTypes.object,
    //onSelect: PropTypes.func,
    //active: PropTypes.any,
   
};

SkybrowserTabs.defaultProps = {
    children: '',
    viewComponent: (props) => (<li>{ JSON.stringify(props) }</li>),
    viewComponentProps: {},
    //onSelect: () => {},
    //active: null,
};

export default SkybrowserTabs;
