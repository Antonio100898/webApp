import { fireEvent, render, screen, } from "@testing-library/react";
import AppDrawer from "../components/UI/SideBar/Menu/AppDrawer";
import DashboardMenuItem from "../components/UI/SideBar/Menu/MenuListItems/DashboardMenuItem";

describe("<AppDrawer/>", () => {
  it("should desplay Dashboard menu item", () => {
    const {getByTestId} = render(<AppDrawer/>)
    const drawer = getByTestId("drawer")
    expect(drawer).toHaveTextContent("Dashboard")
  });

  it("should not display text of menu items while clicked on menu button", async() => {
    const {getByTestId} = render(<AppDrawer/>)
    const drawer = getByTestId("drawer")
    expect(drawer).toHaveTextContent("Orders")
    fireEvent.click(screen.getByTestId("menuButton"))
     expect(drawer).toHaveTextContent("Orders")
  })
});

describe("<DashboardMenuItem/>", () => {
  it("should desplay right label passed into component`s props", () => {
    const {getByTestId} = render(<DashboardMenuItem label="test"/>)
    const mainMenuItem = getByTestId("dashboardText")
    expect(mainMenuItem).toHaveTextContent("test")
  });
});

