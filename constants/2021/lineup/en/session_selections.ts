import {
  SelectedSession,
  endingBase,
  openingBase,
  session1Base,
  session2Base,
  session3Base,
  session4Base,
  session5Base,
  session6Base,
  sponsor1,
  sponsor2,
} from "../context";
import {
  GuillaumeGomez,
  TakayukiMaedaEn,
  TongMu,
  YukiOkushi,
  dorayakikun,
  kirill,
  sp4ghetEn,
  utam0kEn,
  wish,
} from "../speaker";

export const selectedSessions: SelectedSession[] = [
  {
    title:
      "How Rust triages regressions and prevents them from reaching to stable",
    elevatorPitch:
      "This talk describes how Rust contributors triage regressions and prevent them from reaching Stable Rust. Rust’s release cycle is relatively fast, but how do they prevent regressions? This talk helps you to understand what and how they’ve been working.",
    speaker: [YukiOkushi],
    description: "",
    pagePath: "/2021/lineup/en/1",
    ...session1Base,
  },
  {
    title: "One for All Thread Pool - yatp",
    elevatorPitch:
      "The database is an application with both IO-intensive and CPU-intensive tasks. This talk will explain how TiKV, a distributed transactional KV database built with Rust, applied yatp, the unified thread pool, which replaces multiple thread pools to optimize the scheduling of the database system.",
    speaker: [TongMu],
    description: "",
    pagePath: "/2021/lineup/en/2",
    ...session2Base,
  },
  {
    title:
      "A Ruby version manager written in Rust, which is 7 seconds faster than rbenv",
    elevatorPitch:
      "When using Ruby, it is important to manage your Ruby versions for each project, but installing Ruby with rbenv, the most popular Ruby version manager, takes about two to three minutes. To speed up Ruby installation and simplify Ruby version management, I created a Pure Rust Ruby version manager called frum. This talk will explain what I learned from implementing frum.",
    speaker: [TakayukiMaedaEn],
    description: "",
    pagePath: "/2021/lineup/en/3",
    ...session3Base,
  },
  {
    title:
      "Sh4der Jockey: a tool for realtime visual performances using Rust and OpenGL",
    elevatorPitch:
      "We present Sh4der Jockey, a tool for realtime visual performances. The tool is used to run multiple shaders in a pipeline to create demoscene-like effects. We present the motivations for building this tool, as well as some of the technical challenges faced as we developed Sh4der Jockey.",
    speaker: [sp4ghetEn],
    description: "",
    pagePath: "/2021/lineup/en/4",
    ...session4Base,
  },
  {
    title: "Rust 🤝 Container Runtime",
    elevatorPitch:
      "In this presentation, I'll explain the possibility of developing a container runtime in Rust. Based on my experience with youki, the container runtime in Rust that I'm mainly a maintainer, I'll give a more concrete explanation. From these experiences, I believe that Rust is a language that should contribute more to this field. I hope that by sharing my findings in this presentation, many Rustaceans will become interested in this field. At the beginning of the display, I'll also briefly explain container runtime technologies such as cgroups with youki's actual Rust code. If you have touched containers before, you should be able to understand the talk to some extent.",
    speaker: [utam0kEn],
    description: "",
    pagePath: "/2021/lineup/en/5",
    ...session5Base,
  },
  {
    title: "Unsafe in Rust (use case with sysinfo)",
    elevatorPitch:
      "This talk will explain how to use unsafe in Rust, the traps to avoid and provide some tips to make it better. It’ll use the sysinfo crate as example. The goal of the sysinfo crate is to allow users to get system information. The important point being to have one API for all different systems.",
    speaker: [GuillaumeGomez],
    description: "",
    pagePath: "/2021/lineup/en/6",
    ...session6Base,
  },
  {
    title:
      "Node.js in Rust: How to do it and what to expect from it: YUMEMI, inc.",
    elevatorPitch:
      "The main goal of this talk is to show that it is possible to embed Node.js runtime in your Rust project and to explain why it can be beneficial.I will guide you through all the crucial steps of embedding Node.js. We will look at the official Node.js C++ embedder API and what we can do with Rust’s FFI despite its lack of C++ support. Much of this is the result of the embedding experiments I did while helping build Orogene - a package manager for Node.js-compatible projects that is written in Rust.",
    speaker: [kirill],
    description: "",
    ...sponsor1,
  },
  {
    title: "Production-ready Rust in PingCAP: PingCAP",
    elevatorPitch:
      "In PingCAP, we built TiKV, a distributed KV database in Rust, which is used in production by thousands of clients around the world. This talk will show you how we did it via two parts:\n" +
      "(1) the ecosystem we built for Rust, e.g. libraries and teaching courses.\n" +
      "(2) experience and lessons we learnt when using Rust in such mission critical scenarios: performance, stability, troubleshooting and so on.",
    speaker: [wish],
    description: "",
    ...sponsor2,
  },
  {
    title: "Opening Session",
    elevatorPitch: "Welcome from the Rust.Tokyo team!",
    speaker: [dorayakikun],
    description: "",
    ...openingBase,
  },
  {
    title: "Closing Session",
    elevatorPitch: "See you next year!",
    speaker: [dorayakikun],
    description: "",
    ...endingBase,
  },
];
