import React from 'react'
import './tabBar.css'
const TabBar = ({ options, onClickTabBar, selectedTab }) => {
    return (
        <div className='d-flex'>
            {
                options?.map((o, i) => {
                    return (
                        <div className='tabbar-main-wrapper' key={i}
                            onClick={() => onClickTabBar(o?.id)}
                            style={{
                                border: o?.id === selectedTab ? "1px solid rgba(34, 169, 225, 1)" : "1px solid black",
                                background: o?.id === selectedTab ? "rgba(34, 169, 225, 1)" : "#FFF",
                                color: o?.id === selectedTab ? "#FFF" : "black"
                            }}
                        >
                            <div style={{ marginRight: "10px" }}>
                                {o?.icon}
                            </div>
                            <div>
                                <div>{o?.title}</div>
                                <div style={{
                                    fontSize: "13px",
                                    color: o?.id === selectedTab ? "#FFF" : "rgba(129, 129, 129, 1)"
                                }}>{o?.desc}</div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TabBar