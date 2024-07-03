import { render, screen, waitFor } from "@testing-library/react";
import { HomeProvider, useHome } from "@/app/context/HomeContext";
import { mockHomeProfiles } from "../mocks/Profiles.mock";

const mockProfiles = mockHomeProfiles;

beforeAll(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockProfiles),
    })
  ) as jest.Mock;
});

const TestComponent = () => {
  const { homeBannerProfiles, profilesLoading } = useHome();
  if (profilesLoading) return <div>Loading...</div>;
  return (
    <div>
      {homeBannerProfiles.map((profile: { id: number; name: string }) => (
        <div key={profile.id}>{profile.name}</div>
      ))}
    </div>
  );
};

test("it provides profiles and updates loading state", async () => {
  render(
    <HomeProvider>
      <TestComponent />
    </HomeProvider>
  );

  expect(screen.getByText("Loading...")).toBeInTheDocument();

  await waitFor(() =>
    expect(screen.queryByText("Loading...")).not.toBeInTheDocument()
  );

  mockProfiles.forEach((profile) => {
    expect(screen.getByText(profile.name)).toBeInTheDocument();
  });
});
