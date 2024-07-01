import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Page from "../../app/contact/page";
import { HomeProvider } from "@/app/context/HomeContext";

describe("Contact Page Test", () => {
  it("renders a heading", () => {
    const providerProps = {
      value: { homeBannerProfiles: [], profilesLoading: false },
    };

    render(<Page />);

    screen.debug(undefined, 20000);

    // const element = screen.getByText(/Loading/i);
    // expect(element).toBeInTheDocument();
  });
});
