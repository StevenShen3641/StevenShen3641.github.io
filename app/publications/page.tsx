import Link from "next/link";

export const metadata = {
  title: "Publications",
  description: "Publications",
};

type Author = {
  name: string;
  underline?: boolean;
};

type Publication = {
  venue: string;
  title: string;
  venue_detailed: string;
  authors: Author[];
  note?: string;
  url?: string;
};

const publications: Publication[] = [

  {
    venue: "Arxiv",
    title: "PatchBench: Evaluating AI Agents for Vulnerability Patching",
    venue_detailed: "",
    authors: [
      { name: "Chihao Shen", underline: true },
      { name: "Jiacheng Li" },
      { name: "Aastha Mahajan" },
      { name: "Jeffery Siyuan Tian" },
      { name: "Yonghwi Kwon" },
      { name: "Yizheng Chen" },
    ],
    url: "https://arxiv.org/abs/2609.04075",
  },
  {
    venue: "Arxiv",
    title: "Symbolon: Learning Transformations for Symbolic Execution",
    venue_detailed: "",
    authors: [
      { name: "Jie Zhu" },
      { name: "Penghui Li" },
      { name: "Zhongxuan Li" },
      { name: "Chihao Shen", underline: true },
      { name: "Ziyang Li" },
      { name: "Yizheng Chen" },
      { name: "Kexin Pei" },
    ],
    url: "https://arxiv.org/abs/2606.29108",
  },
  {
    venue: "EMNLP'26",
    title: "Benchmarking Correctness and Security in Multi-Turn Code Generation",
    venue_detailed: "Proceedings of the 2026 Conference on Empirical Methods in Natural Language Processing",
    authors: [
      { name: "Ruchit Rawal" },
      { name: "Jeffrey Yang Fan Chiang" },
      { name: "Chihao Shen", underline: true },
      { name: "Jeffery Siyuan Tian" },
      { name: "Aastha Mahajan" },
      { name: "Tom Goldstein" },
      { name: "Yizheng Chen" },
    ],
    url: "https://www.arxiv.org/abs/2510.13859",
  },
  {
    venue: "LLM4Code'26",
    title: "SecRepoBench: Benchmarking Code Agents for Secure Code Completion in Real-World Repositories",
    venue_detailed: "Proceedings of the 3rd International Workshop on Large Language Models For Code",
    authors: [
      { name: "Chihao Shen", underline: true },
      { name: "Connor Dilgren" },
      { name: "Purva Chiniya" },
      { name: "Luke Griffith" },
      { name: "Yu Ding" },
      { name: "Yizheng Chen" },
    ],
    url: "https://dl.acm.org/doi/full/10.1145/3786181.3788703",
  },
  {
    venue: "ICSE'26",
    title: "Locus: Agentic Predicate Synthesis for Directed Fuzzing",
    venue_detailed: "Proceedings of the IEEE/ACM 48th International Conference on Software Engineering",
    authors: [
      { name: "Jie Zhu" },
      { name: "Chihao Shen", underline: true },
      { name: "Ziyang Li" },
      { name: "Jiahao Yu" },
      { name: "Yizheng Chen" },
      { name: "Kexin Pei" },
    ],
    url: "https://arxiv.org/abs/2508.21302",
  },
  {
    venue: "NeurIPS'25 D&B",
    title:
      "Towards Evaluating Proactive Risk Awareness of Multimodal Language Models",
    venue_detailed: "Advances in Neural Information Processing Systems 38",
    authors: [
      { name: "Youliang Yuan" },
      { name: "Wenxiang Jiao" },
      { name: "Yuejin Xie" },
      { name: "Chihao Shen", underline: true },
      { name: "Menghan Tian" },
      { name: "Wenxuan Wang" },
      { name: "Jen-tse Huang" },
      { name: "Pinjia He" },
    ],
    url: "https://proceedings.neurips.cc/paper_files/paper/2025/file/0a7872c9d3ce6792d033d3b0d044ba8a-Paper-Datasets_and_Benchmarks_Track.pdf",
  },
  {
    venue: "LREC-COLING'24",
    title:
      "Does ChatGPT Know that It Does Not Know? Evaluating the Black-Box Calibration of ChatGPT",
    venue_detailed: "Proceedings of the 2024 Joint International Conference on Computational Linguistics, Language Resources and Evaluation",
    authors: [
      { name: "Youliang Yuan" },
      { name: "Wenxuan Wang" },
      { name: "Qingshuo Guo" },
      { name: "Yiming Xiong" },
      { name: "Chihao Shen", underline: true },
      { name: "Pinjia He" },
    ],
    note: "Oral Presentation",
    url: "https://aclanthology.org/2024.lrec-main.462/",
  },
];

function formatAuthorsNodes(authors: Author[]) {
  const renderName = (a: Author, i: number) =>
    a.underline ? <u key={i}>{a.name}</u> : <span key={i}>{a.name}</span>;

  if (authors.length === 0) return null;
  if (authors.length === 1) return renderName(authors[0], 0);
  if (authors.length === 2)
    return (
      <>
        {renderName(authors[0], 0)} and {renderName(authors[1], 1)}
      </>
    );

  return (
    <>
      {authors.slice(0, -1).map((a, i) => (
        <span key={i}>
          {renderName(a, i)}
          {", "}
        </span>
      ))}
      {"and "} {renderName(authors[authors.length - 1], authors.length - 1)}
    </>
  );
}

export default function Pubs() {
  return (
    <>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Publications</h1>

      <div className="space-y-6">
        {publications.map((pub, idx) => (
          <p key={idx} className="leading-relaxed">
            <span className="font-semibold">
              {pub.venue}
              <span className="font-normal"> - </span>
              <span className="prose prose-neutral dark:prose-invert">
                {pub.url ? <Link href={pub.url}>{pub.title}</Link> : pub.title}. {pub.venue_detailed ? <span className="font-normal italic">{pub.venue_detailed}.</span> : null}
              </span>
              {pub.note ? (
                <span className="prose-neutral dark:prose-invert text-[#D74fff] ml-2">
                  {pub.note}
                </span>
              ) : null}
            </span>
            <br />
            <span className="prose prose-neutral dark:prose-invert">
              {formatAuthorsNodes(pub.authors)}.
            </span>
          </p>
        ))}
      </div>
    </>
  );
}
