import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './header.css'
import { useLocation, useNavigate } from 'react-router-dom';
import { HEADER_IMAGES } from '@/constant/images';
import { HOME_HEADER_CONST_DATA } from '@/constant/staticData';
import ButtonComp from '@/componant/ButtonComp/ButtonComp';


function HeaderComponent({ value, smoothScrollToRef, faqRef }) {

    const nav = useNavigate()
    const location = useLocation()
    const globalTokenReducer = {}
    const profileData = {}
    // const globalTokenReducer = useSelector((state) => state?.globalReducer)
    // const profileData = useSelector((state) => state?.globalReducer?.userDetails)

    const onClickProfileData = () => {

    }

    const onClickHeaderItemData = (na, ref) => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // for a smooth scroll effect
        });
        nav(na)
    }

    const ProfileController = () => {
        return (
            <>
                {globalTokenReducer?.loginCredential ?
                    <div
                        onClick={() => onClickProfileData()}
                        style={{ cursor: "pointer" }}
                    >
                        <div className='dashboard-header-main-wrapper' style={{ marginLeft: "20px" }}>
                            {
                                profileData?.profilePic ? <img src={profileData?.profilePic} style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }} /> : null}
                        </div>
                    </div> :
                    <div className="d-flex">
                        <ButtonComp
                            isLight={true}
                            text="Sign up"
                            onClick={() => nav('/register')}
                            width={"auto"}
                        />
                    </div>
                }
            </>
        )
    }

    return (
        <Navbar expand="lg" className="header-main-wrapper-background-color" sticky="top">
            <Container>
                <div onClick={() => nav("/")}>
                    <img src={HEADER_IMAGES.logo} style={{ width: '130px', cursor: 'pointer' }}
                    />
                </div>
                <div style={{ display: "flex" }}>
                    <div className='home-hrader-button-text-without-collapse' style={{ marginRight: "10px" }}>
                        <ProfileController />
                    </div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                </div>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto justify-content-between" style={{ marginLeft: "auto" }}>
                        {
                            HOME_HEADER_CONST_DATA.map((d, index) => {
                                return (
                                    <div
                                        key={index}
                                        onClick={() => onClickHeaderItemData(d?.nav, d?.ref === "faqRef" && faqRef)}
                                        style={{
                                            cursor: "pointer",
                                            color: location?.pathname == d?.nav ? "var(--primary-color)" : null
                                        }}
                                        className=' main-text-normal header-item-text px-md-4'
                                    >{d?.name}</div>
                                )
                            })
                        }
                    </Nav>
                    <div className='home-hrader-button-text'>
                        <ProfileController />
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default HeaderComponent