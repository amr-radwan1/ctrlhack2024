import dynamic from "next/dynamic";

const ARExperience = dynamic(() => import("../components/ARExperience"), {
  ssr: false,
});

export default function Home() {
  return (
    <main>
      <h1>My Geenee AR Experience</h1>
      <ARExperience />
    </main>
  );
}
