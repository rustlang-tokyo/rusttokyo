import type { SpeakerDescription } from "./speaker";

export type SelectedSession = SelectedSessionBase & {
  title: string;
  elevatorPitch: string;
  speaker: SpeakerDescription[];
  pagePath?: string;
  sessionLanguage: "日本語" | "English";
  captionLanguage?: "日本語" | "English";
};

export type SelectedSessionBase = {
  id: number;
  area: string;
  track?: "A" | "B";
  startFrom: string;
  endAt: string;
  order: number;
  sessionType: "Greeting" | "Long Talk" | "Short Talk" | "Sponsor";
  renderDesc: boolean;
  presentationSlide?: {
    title: string;
    url: string;
  };
  youtube?: {
    url: string;
  };
};

export const opening: SelectedSessionBase = {
  id: 0,
  area: "opening / A / opening / C",
  startFrom: "11:00",
  endAt: "11:10",
  order: 0,
  sessionType: "Greeting",
  renderDesc: false,
};

export const session1A: SelectedSessionBase = {
  id: 1,
  area: "no-1 / A",
  track: "A",
  startFrom: "11:20",
  endAt: "11:45",
  order: 1,
  sessionType: "Short Talk",
  renderDesc: true,
  presentationSlide: {
    title: "大規模プロダクトのための Cargo Workspaces ベストプラクティス ",
    url: "https://speakerdeck.com/mnawa/da-gui-mo-purodakutonotameno-cargo-workspaces-besutopurakuteisu",
  },
  youtube: {
    url: "https://youtu.be/Q-7WTaJU-hY?si=vKRdwpTLVlf3gpru",
  },
};

export const session1B: SelectedSessionBase = {
  id: 2,
  area: "no-1 / B",
  track: "B",
  startFrom: "11:20",
  endAt: "11:45",
  order: 2,
  sessionType: "Short Talk",
  renderDesc: true,
  presentationSlide: {
    title: "Rust で TUI アプリケーションを作った話",
    url: "https://speakerdeck.com/ynqa/make-tui-application-in-rust",
  },
  youtube: {
    url: "https://youtu.be/c7kAC8c_xYw?si=t74_GhCLI3kdvZeO",
  },
};

export const session2A: SelectedSessionBase = {
  id: 3,
  area: "no-2 / A",
  track: "A",
  startFrom: "11:55",
  endAt: "12:20",
  order: 3,
  sessionType: "Short Talk",
  renderDesc: true,
  youtube: {
    url: "https://youtu.be/pYz2XQekAds?si=8wuIAANGAVM_Ftok",
  },
};

export const session2B: SelectedSessionBase = {
  id: 4,
  area: "no-2 / B",
  track: "B",
  startFrom: "11:55",
  endAt: "12:20",
  order: 4,
  sessionType: "Short Talk",
  renderDesc: true,
  youtube: {
    url: "https://youtu.be/i93ty5_X1vc?si=mloYgC3UtFSe3yan",
  },
};

export const session3A: SelectedSessionBase = {
  id: 5,
  area: "no-3 / A",
  track: "A",
  startFrom: "12:30",
  endAt: "12:55",
  order: 5,
  sessionType: "Sponsor",
  renderDesc: true,
  youtube: {
    url: "https://youtu.be/nUeySTxipcs?si=y1TWjL7U4F0cbt2t",
  },
};

export const session3B: SelectedSessionBase = {
  id: 6,
  area: "no-3 / B",
  track: "B",
  startFrom: "12:30",
  endAt: "12:55",
  order: 6,
  sessionType: "Sponsor",
  renderDesc: true,
  youtube: {
    url: "https://youtu.be/U6T6GOXWGqs?si=NNSGizM3ZiNcTBrQ",
  },
};

export const session4A: SelectedSessionBase = {
  id: 7,
  area: "no-4 / A",
  track: "A",
  startFrom: "13:05",
  endAt: "13:30",
  order: 7,
  sessionType: "Sponsor",
  renderDesc: true,
  presentationSlide: {
    title: "Fairy DevicesがRustを採用して 5年が経ちました",
    url: "https://speakerdeck.com/emergent/fairy-devicesgarustwocai-yong-site-5nian-gajing-timasita",
  },
  youtube: {
    url: "https://youtu.be/Byeu5Md7TCk?si=WtGh-RsKES-3Dwwo",
  },
};

export const session4B: SelectedSessionBase = {
  id: 8,
  area: "no-4 / B",
  track: "B",
  startFrom: "13:05",
  endAt: "13:30",
  order: 8,
  sessionType: "Sponsor",
  renderDesc: true,
  youtube: {
    url: "https://youtu.be/ZwqZ6cwMkLQ?si=JP6LEbUSFtz-5Mey",
  },
};

export const session5A: SelectedSessionBase = {
  id: 9,
  area: "no-5 / A",
  track: "A",
  startFrom: "13:40",
  endAt: "14:05",
  order: 9,
  sessionType: "Short Talk",
  renderDesc: true,
  presentationSlide: {
    title: "Instrumenting Async Runtime",
    url: "https://speakerdeck.com/kimuramotoyuki/instrumenting-async-runtime",
  },
  youtube: {
    url: "https://youtu.be/Sa4ncpmvrHc?si=nHSnUCG6ZqeEjLYa",
  },
};

export const session5B: SelectedSessionBase = {
  id: 10,
  area: "no-5 / B",
  track: "B",
  startFrom: "13:40",
  endAt: "14:05",
  order: 10,
  sessionType: "Short Talk",
  renderDesc: true,
  youtube: {
    url: "https://youtu.be/RP2Vebt3D1Q?si=CAZVO220nAdFrjlR",
  },
};

export const session6A: SelectedSessionBase = {
  id: 11,
  area: "no-6 / A",
  track: "A",
  startFrom: "14:15",
  endAt: "14:40",
  order: 11,
  sessionType: "Short Talk",
  renderDesc: true,
  youtube: {
    url: "https://youtu.be/gCXQrhVRaIc?si=Fdxm37_YhNRJwehp",
  },
};

export const session6B: SelectedSessionBase = {
  id: 12,
  area: "no-6 / B",
  track: "B",
  startFrom: "14:15",
  endAt: "14:40",
  order: 12,
  sessionType: "Short Talk",
  renderDesc: true,
  presentationSlide: {
    title: "smithay で作って動かす Wayland compositor",
    url: "https://docs.google.com/presentation/d/1x8CMBxYoSoU1f9xSbY5VkZ-toDTOJxxYkm7LOPaGx0s/edit#slide=id.g31af952cf01_0_1",
  },
  youtube: {
    url: "https://youtu.be/-Qx3gWW1vNE?si=ZDOXuUcQvuDStNyg",
  },
};

export const session7A: SelectedSessionBase = {
  id: 13,
  area: "no-7 / A",
  track: "A",
  startFrom: "14:50",
  endAt: "15:15",
  order: 13,
  sessionType: "Short Talk",
  renderDesc: true,
  presentationSlide: {
    title: "ONNX推論クレートの比較と実装奮闘記",
    url: "https://speakerdeck.com/emergent/rust-tokyo-2024-comparing-onnx-crates",
  },
  youtube: {
    url: "https://youtu.be/RiNzCFqcJYQ?si=djZxWnF_HVp7RjCh",
  },
};

export const session7B: SelectedSessionBase = {
  id: 14,
  area: "no-7 / B",
  track: "B",
  startFrom: "14:50",
  endAt: "15:15",
  order: 14,
  sessionType: "Short Talk",
  renderDesc: true,
  presentationSlide: {
    title: "Overcoming Callback Hell When Integrating C into Rust",
    url: "https://docs.google.com/presentation/d/1iS95e6D3lvLKsoGqHU4-6q9MOuVpsPvSwuOI6ydNc9s/edit#slide=id.p",
  },
  youtube: {
    url: "https://youtu.be/BBZLNQzcJTw?si=XoFVAK_79eiO87ro",
  },
};

export const session8A: SelectedSessionBase = {
  id: 15,
  area: "no-8 / A",
  track: "A",
  startFrom: "15:25",
  endAt: "15:50",
  order: 15,
  sessionType: "Sponsor",
  renderDesc: true,
  youtube: {
    url: "https://youtu.be/luHR9GWLfEg?si=jB48HeJEyspb87jP",
  },
};

export const session8B: SelectedSessionBase = {
  id: 16,
  area: "no-8 / B",
  track: "B",
  startFrom: "15:25",
  endAt: "15:50",
  order: 16,
  sessionType: "Sponsor",
  renderDesc: true,
  youtube: {
    url: "https://youtu.be/FmqyHkt8D48?si=u8vsp2NyeAe8ajlI",
  },
};

export const session9A: SelectedSessionBase = {
  id: 17,
  area: "no-9 / A",
  track: "A",
  startFrom: "16:00",
  endAt: "16:25",
  order: 17,
  sessionType: "Sponsor",
  renderDesc: true,
  youtube: {
    url: "https://youtu.be/A-acELSORK4?si=IA80yHwzvxPt5Ke4",
  },
};

export const session9B: SelectedSessionBase = {
  id: 18,
  area: "no-9 / B",
  track: "B",
  startFrom: "16:00",
  endAt: "16:25",
  order: 18,
  sessionType: "Sponsor",
  renderDesc: true,
  youtube: {
    url: "https://youtu.be/LQCxg-iH9vc",
  },
};

export const session10A: SelectedSessionBase = {
  id: 19,
  area: "no-10 / A",
  track: "A",
  startFrom: "16:35",
  endAt: "17:30",
  order: 19,
  sessionType: "Long Talk",
  renderDesc: true,
  youtube: {
    url: "https://youtu.be/I0JvqbRCI2U?si=M8UwmJSflR5_Akqk",
  },
};

export const session10B: SelectedSessionBase = {
  id: 20,
  area: "no-10 / B",
  track: "B",
  startFrom: "16:35",
  endAt: "17:30",
  order: 20,
  sessionType: "Long Talk",
  renderDesc: true,
  presentationSlide: {
    title:
      "日本全国・都市3D化プロジェクト「PLATEAU」とデータ変換OSS「PLATEAU GIS Converter」の公開",
    url: "https://speakerdeck.com/nokonoko1203/ri-ben-quan-guo-du-shi-3dhua-hurosiekuto-plateau-todetabian-huan-oss-plateau-gis-converter-nogong-kai",
  },
  youtube: {
    url: "https://youtu.be/E4FDoadVzF0?si=99VO-NiQCkpzFVy4",
  },
};

export const closing: SelectedSessionBase = {
  id: 99,
  area: "closing / A / closing / C",
  startFrom: "17:40",
  endAt: "17:50",
  order: 99,
  sessionType: "Greeting",
  renderDesc: false,
};
