const menuTextColor = "#233B53"
const menuIconColor = "#103B66"
const menuItemHeight = "50px"

export const styles = {
    drawerClosed: {
        height: "98vh",
        position: "static",
        overflowX: 'hidden',
        overFlowY: "hidden",
        width: "4vw",
    },
    drawerOpened: {
        width: "18vw",
        position: "static",
        overFlowY: "hidden",
        overflowX: 'hidden',
    },
    appContainer: {
        background: "#F8F9FB",
        height: "220vh",
        margin: "0px",
        padding: "0px",
        display: "flex",
    },
    contentWrapper: {
        width: "100%",
    },
    dashboardWrapper: {
        position: "relative",
        width: "100%",
        height: "100%",
    },
    customersPageWrapper: {
        width: "100%",
        height: "100%"
    },
    menuListItem: {
        height: "5vh",
        borderRadius: "4px",
    },
    drawerHeaderOpened: {
        height: "10vh",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center"
    },
    drewerHeaderClosed: {
        paddingLeft: "1vw",
        height: "10vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    drawerHeaderLogo: {
        position: "absolute",
        left: "0px",
        top: "2vh"
    },
    menuButton: {
        height: "5vh",
        margin: "1vh 2vh 0 0"
    },
    menuItemText: {
        color: menuTextColor,
    },
    subMenuItemText: {
        color: menuTextColor,
        marginLeft: "5vh"
    },
    menuIcon: {
        color: menuIconColor,
        marginLeft: "1vh"
    },
    dashboardMenuItem: {
        height: "5vh",
        background: "#F7F7F7",
        borderRadius: "4px",
    },
    dashboardMenuItemText: {
        color: "#21B8F9",
    },
    subMenuText: {
        color: menuTextColor,
        marginLeft: "7vh"
    },
    subMenuItem: {
        height: menuItemHeight,
    },
    topAppBar: {
        display: "flex",
        alignItems: "flex-end",
        width: "100%",
        height: "7vh",
        background: "#FFFFFF",
        boxShadow: "none",
        color: "#103B66",
        borderBottom: "1px solid rgba(10, 37, 64, 0.24)"
    },
    topAppBarItem: {
        width: "95.5%",
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    whatNewBadge: {
        position: "absolute",
        right: "0",
        top: "-1vh"
    },
    drawerWrapper: {
        gridColumnStart: "1",
        gridColumnEnd: "1",
        gridRowStart: "1",
    },
    sideBarDivider: {
        width: "100%",
        height: "1px",
    },
    navLink: {
        color: "#FFFFFF",
        textDecoration: "none"
    },
    collapseList: {
        background: "#E9F8FE",
    },
    selectWrapper: {
        margin: "5vh 0 2vh 0.5vw"
    },
    selectLabel: {
        color: "#546679",
        marginBottom: "2vh",
        fontSize: "22px",
        fontWeight: "500"
    },
    inputLabel: {
        color: "#233B53",
        fontSize: "18px",
        marginTop: "0.5vh"
    },
    select: {
        width: "300px",
        height: "70px",
        borderRadius: "8px",
    },
    appBarBadgeText: {
        color: "#103B66",
    },
    appBarBadgeWrapper: {
        display: "flex",
        width: "7vw",
        position: "relative",
        marginRight: "2vw"
    },
    dashboardBlueBox: {
        width: "100%",
        height: "27vh",
        background: "linear-gradient(180deg, #21B8F9 0%, rgba(33, 184, 249, 0) 132.05%)",
        display: "flex",
        justifyContent: "center",
    },
    storeLink: {
        textDecoration: "underline",
        color: "#FFFFFF"
    },
    storeLinkBox: {
        width: "16vw",
        display: "flex",
        justifyContent: "space-between"
    },
    blueBoxContent: {
        width: "92%",
        display: "flex",
        justifyContent: "space-between",
        marginTop: "7vh",
        color: "#FFFFFF"
    },
    bannersContainer: {
        display: "flex",
        position: "absolute",
        top: "20vh",
        left: "2vw"
    },
    mainBannersBox: {
        width: "67%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
    },
    sideBannersBox: {
        width: "30%"
    },
    statisticPaper: {
        height: "15%",
        width: "20.5vw",
        boxShadow: "0px 4px 4px rgba(50, 50, 71, 0.08), 0px 4px 8px rgba(50, 50, 71, 0.06)",
        borderRadius: "10px",
        padding: "3.5%"
    },
    verticalStack: {
        height: "100%",
    },
    cardLabelText: {
        color: "#103B66",
        marginLeft: "2vh"
    },
    statisticPaperThisMonth: {
        color: "#666666"
    },
    bluePaperLinkText: {
        color: "#21B8F9",
        textDecoration: "underline"
    },
    greenPaperLinkText: {
        color: "#00C48C",
        textDecoration: "underline ",

    },
    bluePaperLinkWrapper: {
        display: "flex"
    },
    bluePaperLinkIcon: {
        marginLeft: "2vh",
        marginTop: "0.3vh"
    },
    cardLabel: {
        display: "flex",
    },
    cardLabelIcon: {
        marginTop: "0.3vh"
    },
    secondaryMenu: {
        background: "#FFFFFF",
        marginTop: "2vh"
    },
    menuOrdersNumberIcon: {
        marginLeft: "90%"
    },
    navLinkWhite: {
        color: "#FFFFFF"
    },
    dashboardRectangle: {
        position: "absolute",
        left: "0%",
        bottom: "-10%"
    },
    drawerMainMenu: {
        background: "#FFFFFF",
        marginBottom: "1vh"
    },
    thisMonthStatisticPaper: {
        display: "flex",
        width: "30%",
        justifyContent: "space-between"
    },
    thisMonthStatisticPaperIcon: {
        marginTop: "2%"
    },
    ordersInfoBox: {
        height: "30%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        marginBottom: "8%"
    },
    mainBannerPaper: {
        height: "26%",
        width: "20.5vw",
        boxShadow: "0px 4px 4px rgba(50, 50, 71, 0.08), 0px 4px 8px rgba(50, 50, 71, 0.06)",
        borderRadius: "10px",
        padding: "3.5%",
        marginTop: "4vh",
        background: "#F3A35C",
        position: "relative"
    },
    newsPaper: {
        height: "90vh",
        width: "89%",
        boxShadow: "0px 4px 4px rgba(50, 50, 71, 0.08), 0px 4px 8px rgba(50, 50, 71, 0.06)",
        borderRadius: "10px",
        padding: "3.5%",
        marginTop: "4vh"
    },
    newsCard: {
        borderRadius: "0",
        boxShadow: "none",
        display: "flex",
        width: "50%",
        height: "14vh"
    },
    newsCardContent: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "80%"
    },
    newsCardImage: {
        width: "30%"
    },
    newsBoxContent: {
        height: "85vh",
        marginTop: "8vh",
        display: "flex",
        flexWrap: "wrap",
    },
    configureShopBannerPaper: {
        height: "23%",
        width: "20vw",
        boxShadow: "0px 4px 4px rgba(50, 50, 71, 0.08), 0px 4px 8px rgba(50, 50, 71, 0.06)",
        borderRadius: "10px",
        padding: "7%",
    },
    inviteFriendBannerPaper: {
        height: "15%",
        width: "20vw",
        boxShadow: "0px 4px 4px rgba(50, 50, 71, 0.08), 0px 4px 8px rgba(50, 50, 71, 0.06)",
        borderRadius: "10px",
        padding: "7%",
    },
    customerSupportBannerPaper: {
        height: "12%",
        width: "20vw",
        boxShadow: "0px 4px 4px rgba(50, 50, 71, 0.08), 0px 4px 8px rgba(50, 50, 71, 0.06)",
        borderRadius: "10px",
        padding: "7%",
    },
    trustpilotBannerPaper: {
        background: "#000032",
        height: "15%",
        width: "20vw",
        boxShadow: "0px 4px 4px rgba(50, 50, 71, 0.08), 0px 4px 8px rgba(50, 50, 71, 0.06)",
        borderRadius: "10px",
        padding: "7%",
    },
    customerSupportBannerContent: {
        width: "80%",
        alignItems: "center"
    },

    greenText: {
        color: "#00C48C"
    },
    trustpilotPrimaryText: {
        color: "#FFFFFF"
    },
    sellBannerTextBox: {
        width: "50%",
        height: "36%",
        marginTop: "4%",
        color: "#FFFFFF",
    },
    supportButton: {
        background: "#21B8F9",
        width: "60%",
        height: "35%",
    },
    supportButtonFont: {
        fontFamily: "'Source Sans Pro', sans-serif",
        fontWeight: 600
    },
    showMoreButton: {
        marginTop: "20px",
        display: "flex",
        width: "150px",
        justifyContent: "space-between"
    },
    showMoreButtonText: {
        textDecoration: "underline",
        color: "#FFFFFF"
    },
    mobileStoreIconsBox: {
        position: "absolute",
        bottom: "35px",
        display: "flex",
        width: "360px",
        justifyContent: "space-between"
    },
    showMoreButtonIcon: {
        marginTop: "1px"
    },
    iPhoneImageBox: {
        position: "absolute",
        top: "50px",
        right: "40px"
    },
    extensionsMarketPlacePaper: {
        height: "26%",
        width: "20.5vw",
        boxShadow: "0px 4px 4px rgba(50, 50, 71, 0.08), 0px 4px 8px rgba(50, 50, 71, 0.06)",
        borderRadius: "10px",
        padding: "3.5%",
        marginTop: "36px",
    },
    carousel: {
        height: "265px",
    },
    carouselItem: {
        width: "100%",
    },
    carouselItemPaper: {
        width: "170px",
        height: "170px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "none",
        borderRadius: "15px",
        margin: "auto"
    },
    carouselItemText: {
        width: "100%px",
        marginTop: "20px",
        textAlign: "center",
        color: "#103B66"
    },
    configureStoreOrangeText: {
        color: "#FFA26B"
    },
    configureStorePrimaryText: {
        color: "#103B66"
    },
    newsLabelWrapper: {
        width: "100%"
    }
}
