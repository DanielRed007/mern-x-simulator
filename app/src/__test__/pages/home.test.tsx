import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Page from "../../app/page";
import { HomeProvider } from "@/app/context/HomeContext";

const customRender = (
  ui: React.ReactElement,
  { providerProps, ...renderOptions }: any
) => {
  return render(
    <HomeProvider {...providerProps}>{ui}</HomeProvider>,
    renderOptions
  );
};

describe("Home Page Test", () => {
  beforeAll(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve([
            { name: "Profile 1", country: "USA", followingCount: 100 },
            { name: "Profile 2", country: "Canada", followingCount: 200 },
          ]),
      })
    ) as jest.Mock;
  });

  it("renders a heading", () => {
    const providerProps = {
      value: { homeBannerProfiles: [], profilesLoading: false },
    };

    customRender(<Page />, { providerProps });

    // screen.debug(undefined, 20000);

    const element = screen.getByText(/Loading/i);
    expect(element).toBeInTheDocument();
  });

  it("renders a heading 2", () => {
    const providerProps = {
      value: { homeBannerProfiles: [], profilesLoading: true },
    };

    customRender(<Page />, { providerProps });

    // screen.debug(undefined, 20000);

    //   const element = screen.getByText(/No Profiles/i);
    //   expect(element).toBeInTheDocument();
  });
});
