import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators }   from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store';


import { 
    HeaderWrapper, 
    Logo, 
    Nav, 
    NavItem, 
    SearchWrapper, 
    Addition,
    Button,
    NavSearch,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList
} from './style';

class Header extends Component {
    // constructor(props) {
    //     super(props);

    //     // this.state = {
    //     //     focused: false
    //     // }

    //     this.handleInputFocus = this.handleInputFocus.bind(this);
    //     this.handleInputBlur = this.handleInputBlur.bind(this);

    // }
    getListArea() {
        // 解构赋值
        const { focused, list, page, totalPage,  mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
        const newList = list.toJS();
        const pageList = [];

        if(newList.length) {
            for(let i = (page-1)*10; i < page*10; i++ ) {
                pageList.push(
                    <SearchInfoItem key = { newList[i]}>{ newList[i]}</SearchInfoItem>
                );
            }
        }

        if(focused || mouseIn) {
            return (
                <SearchInfo
                    onMouseEnter={ handleMouseEnter }
                    onMouseLeave = { handleMouseLeave }
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick = { () => handleChangePage(page, totalPage, this.spinIcon) }>
                            <i ref = { (icon) => {this.spinIcon =  icon}} className = "iconfont spin">&#xe619;</i>
                            换一换
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {
                            // list.map((item) => {
                            //     return <SearchInfoItem key = {item}>{ item }</SearchInfoItem>
                            // })
                            pageList
                        }
                        {/*<SearchInfoItem>教育</SearchInfoItem>*/}
                    </SearchInfoList>
                </SearchInfo>
            );
        }else {
            return null;
        }
    }
    render() {
        const { focused, handleInputFocus, handleInputBlur, list, login, logout } = this.props;
        return (
            <Fragment>     
                <HeaderWrapper>
                    <Link to ="/">
                       <Logo />
                    </Link>
                    <Nav>
                        <NavItem className = "left active">首页</NavItem>
                        <NavItem className = "left">下载App</NavItem>
                        {
                            login ? 
                             <NavItem onClick = { logout } className='right'>退出</NavItem>:
                             <Link to='/login'>
                               <NavItem className = "right">登录</NavItem>
                             </Link>
                        }
                        <NavItem className = "right">
                             <span className = "iconfont">&#xe636;</span>
                        </NavItem>
                        <SearchWrapper>
                            <CSSTransition
                                in = { this.props.focused }
                                timeout = { 200 }
                                classNames = "slide"
                            >
                                <div>
                                    <NavSearch className = { focused ? 'focused': ''}
                                            onFocus = { () => handleInputFocus(list) }
                                            onBlur = {  handleInputBlur }
                                    ></NavSearch>
                                    <span  className = { focused ? 'focused iconfont zoom': 'iconfont zoom'}>&#xe638;</span>
                                </div>
                            </CSSTransition>
                            { this.getListArea() }
                        </SearchWrapper>
                        
                    </Nav>
                    <Addition>
                        <Link to='/Write'> 
                            <Button className='writting'>
                                <span className = "iconfont icon-write">&#xe608;</span>
                                写文章
                            </Button>
                        </Link>    
                        <Button className='reg'>注册</Button>
                    </Addition>
               </HeaderWrapper>
            </Fragment>
        );
    }

    // handleInputFocus() {
    //     this.setState({
    //         focused: true
    //     })
    // }

    // handleInputBlur() {
    //     this.setState({
    //         focused: false
    //     })
    // }
}

const mapStateToProps = (state) => {
    return {
        // focused: state.header.focused
        // focused: state.header.get('focused')
        // focused: state.get('header').get('focused')
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        login: state.getIn(['login', 'login'])
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            // const action = {
            //     type: 'search_focus'
            // };
            // if(list.size === 0 ) {
            //     dispatch(actionCreators.getList());
            // }
            (list.size === 0) && dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },

        handleInputBlur() {
            // const action = {
            //     type: 'search_blur'
            // };
            dispatch(actionCreators.searchBlur());
           
        },

        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter());
        },

        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave());
        },

        handleChangePage(page, totalPage, spin) {
            console.log(spin.style.transform);
            // spin.style.transform = 'rotate(360deg)';
            let  originAngle = spin.style.transform.replace(/[^0-9]/, '');
            if(originAngle) {
                originAngle = parseInt(originAngle, 10);
            }else {
                originAngle = 0;
            }
            spin.style.transform = 'rotate('+ (originAngle + 360) + 'deg)';

            if(page < totalPage) {
                dispatch(actionCreators.changePage(page+1));
            }else {
                dispatch(actionCreators.changePage(1));
            }

        },

        logout() {
            dispatch(loginActionCreators.logout())
        }
    }
}


export default connect(mapStateToProps, mapDispathToProps)(Header);