export type PaperType = "journal" | "conference" | "preprint" | "poster" | "talk";

export interface Paper {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  abstract: string;
  tags: string[];
  type: PaperType;
  links: {
    pdf?: string;
    arxiv?: string;
    code?: string;
    project?: string;
  };
  featured?: boolean;
  cvHighlights?: string[];
}

export const papers: Paper[] = [
  {
    id: "structure-aware-biomedical-embeddings",
    title: "Structure-Aware Contrastive Learning for Biomedical Embeddings: Bridging the Gap Between HPO and Clinical Literature",
    authors: ["Jose Luis Mellina Andreu", "Alejandro Cisterna García", "Juan Botía"],
    venue: "Accepted at IJCAI-ECAI 2026, Special Track on AI and Health",
    year: 2026,
    abstract: "Large Language Models (LLMs) are extensively used at biomedical text processing but often fail to capture the complex, functional relationships encoded in expert knowledge graphs like the Human Phenotype Ontology (HPO). This “semantic gap” limits their utility in precision medicine tasks such as rare disease diagnosis, where distinguishing overlapping clinical presentations requires understanding underlying pathophysiological connections rather than just surface-level textual similarity. In this work, we propose a Neuro-Symbolic Alignment Framework that bridges this separation by integrating literature-mined specialized phenotypical descriptions with the ontological structure used as reference. Specifically, we augment phenotype representations with automatically selected text fragments from massive corpus of descriptions mined from scientific literature (PubMed), overcoming the typical data scarcity of standard ontology definitions. We define a new embedding adaptation procedure whose fine-tuning approach is guided by a novel “Disease-Overlap” similarity measure, which prioritizes clinical co-occurrence of phenotypes over taxonomic distance, and optimizes the embedding space using AnglE Loss to mitigate gradient saturation. Extensive evaluations show that our approach significantly outperforms state-of-the-art baselines, including SapBERT, on both intrinsic semantic correlation and practical downstream tasks, including synthetic patient disease ranking and solving real cases stored in Phenopacket, where our model achieves x4 top-1 accuracy than the previous best model.",
    tags: ["Large Language Models", "Contrastive Learning", "Knowledge Graphs", "Representation Learning"],
    type: "conference",
    links: {
      arxiv: "https://ijcai-preprints.s3.us-west-1.amazonaws.com/2026/AI4H271.pdf",
    },
    featured: true,
    cvHighlights: [
      "Designed a neuro-symbolic alignment pipeline that fine-tunes biomedical language-model embeddings using literature-mined text, ontology structure, and contrastive learning.",
      "Achieved **4× top-1 disease-ranking accuracy** versus the previous best model on real Phenopacket cases.",
    ],
  },
  {
    id: "phenolinker",
    title: "Phenolinker: Phenotype-gene link prediction and explanation using heterogeneous graph neural networks",
    authors: ["Jose L. Mellina-Andreu",  "Luis Bernal", "Antonio F Skarmeta", "Mina Ryten", "Sara Álvarez", "Alejandro Cisterna García", "Juan A Botía"],
    venue: "Artificial Intelligence in Medicine",
    year: 2025,
    abstract: "The association of a given human phenotype with a genetic variant remains a critical challenge in biomedical research. We present PhenoLinker, a novel graph-based system capable of associating a score to a phenotype-gene relationship by using heterogeneous information networks and a convolutional neural network-based model for graphs, which can provide an explanation for the predictions. Unlike previous approaches, PhenoLinker integrates gene and phenotype attributes, while maintaining explainability through Integrated Gradients. PhenoLinker consistently outperforms existing models in both retrospective and temporal validation tasks. This system can aid in the discovery of new associations and in understanding the consequences of human genetic variation.",
    tags: ["Graph Neural Networks", "Heterogeneous Graphs", "Explainable AI", "Link Prediction"],
    type: "journal",
    links: {
      arxiv: "https://www.sciencedirect.com/science/article/pii/S0933365725001125",
      code: "https://github.com/Mellandd/PhenoLinker",
      pdf: "https://pdf.sciencedirectassets.com/271219/1-s2.0-S0933365725X00075/1-s2.0-S0933365725001125/main.pdf?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIAepQwb5r9wi3t%2FU60U7jLf28Kg8U564Uj3knIQ%2FOxsLAiAvk4lxgr1xc1UAu1Au51KKnLliTioa5NrmkLR%2BIoLMyCqzBQhdEAUaDDA1OTAwMzU0Njg2NSIM6NtlkSt%2FNAGJPXrmKpAFjS56f09fumEmVb%2BKJGFJI%2BoFWK%2BQBm3%2F3c4oWeQTVopGBbpZH3m3znOr%2BmemjJrv7L64rrKFlTU2tHK4MT5G88MEwJtNYv%2FNOXV5ZbfdAW%2FZfQoaL5YV6b6OFV1RLaPdMGEOdrUSNyb9vPYSdygMVE8zdn7aiYId4LTl7eJhZ3WNTMGY%2B%2FJ8kUm%2F35vvJ3pLw1wRBqkthZCpu3DfN5t9jeFWYmO%2Bxrd7dMWEehb65UCbve6oeCik04OL3N7krCWjNnET%2FPgv8Y7YZuFPIb3nAb%2Br2zQ4NKAvJlyQiR5CV2YalOtjtgtE0Ebb2x09iC7MX2QuY5IID0iuVbdsKS44v8z3goFbibOkPei8lbcZeXJoWAWv1TNq8zpHTL2SPxBDsPGm%2FCnjApZ598c3fRyPI6gQmXJBDItvqN7AugdlaQHwLr6npPez9TDEwyOcYZ3RzDXsnwL68Fsct9MKwiP8pMLZR3VXVZxkPwpgYL9vQmera%2F9ybjN46umHoaf9aSaWpHKTacpRknlSCBmLhnL3DALkGyuz%2BNKAwW3KKW55qg2GOiSSdILfsA18LWy4gFJwgpNarBBS1ShP8wf6hl9gNfqCqiVKUVboIxtaaCp%2BWGHuVKFAIgLcORVEuc9hH9QxgZ8nsau26g06cASvGJvxK1pbG3wtbOXN4sxrimR1xL9BSyRx%2FfkDOBFHwMCtKvM4qytc4iClggnEgA0ybTOIR3Vwl1GD06ZlLWHHI2YJ%2BV8S1jzWvW8Tw1uOAOvzfWrGrNiedCRU1%2BtobwF%2BPVKQDz1gsABVI%2FKFtYbDfs1kAsSkbDlcyvjHs7qmYa1V3Gdap%2FuJO1000qA4SL6vu3SFzKEzDzqri9RR24scZUU6Xtowl9SczAY6sgH5ZuZtIPeHodMVNfq7XzxPNUt58XkDDdds10krAmetpZUvoB0sAO1ktdBT8whV4Inaxz1i9jIPFTUGLUGpqCmkGBw5FOlF7FZ4A8k%2BqmD7easrfIFb4j%2BUDwB1lp8NrntEIV9J3TkMD6MsE85BqlPmWOgpRKcbHpRjPwwkqiMQsqydNyJaRidgxZbVk82GTsOz568p0atdfTsMMyuiNMgwgCX%2F8VGgvcDFQUhosXN%2FP9Dh&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20260207T122835Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAQ3PHCVTYSSVH4HFS%2F20260207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=77265b709c3c0ecce729f7510a04ecdb3324b92c2b9a0add9d7952a52071692a&hash=2e8a7b3ee660f516c2839fcb95966b6fe2afb60bf49a8a33d6177d3e7e3199e6&host=68042c943591013ac2b2430a89b270f6af2c76d8dfd086a07176afe7c76c2c61&pii=S0933365725001125&tid=spdf-b809a3f4-515e-478d-861d-d13982d63d05&sid=94a858c25be8674b2c7ab654049214eb1bcbgxrqb&type=client&tsoh=d3d3LnNjaWVuY2VkaXJlY3QuY29t&rh=d3d3LnNjaWVuY2VkaXJlY3QuY29t&ua=03155d020257045d505c&rr=9ca2e353dd6604ae&cc=es",
    },
    featured: true,
    cvHighlights: [
      "Built an explainable heterogeneous GraphSAGE link-prediction system in PyTorch Geometric, combining BioBERT node features with Integrated Gradients.",
      "**Outperformed existing models** in retrospective and temporal validation; predictions contributed to real-world genetic diagnoses.",
    ],
  },
  {
    id: "deibo",
    title: "Data-driven interpretation of dimensions in an embedding language model based on a reference knowledge graph",
    authors: ["Jose L. Mellina-Andreu", "Alejandro Cisterna-García", "Juan A Botía"],
    venue: "Knowledge-Based Systems",
    year: 2025,
    abstract: "The growing use of language models in various applications has highlighted a significant challenge: the nature of numerical embeddings often leads to a lack of interpretability, making it difficult to retrieve the original significance of the text and the human interpretation from the resulting vectors. Current methods for representing text as embeddings fail to establish clear connections between these numerical representations and meaningful concepts within specific domains. This research addresses this gap by introducing a novel method for linking ontology classes with particular dimensions in an embedding space generated by a language model. By utilizing an encoder to transform text into embeddings and incorporating a knowledge graph, our approach reconnects vector dimensions with meaningful terms, thus enhancing interpretability. We evaluate the interpretability of different language models across various ontologies using a newly developed metric called the Area Under the Interpretability Curve (AUIC), demonstrating that our method achieves high interpretability scores. Our findings reveal that embeddings generated by domain-specific models correlate with specific ontology classes. Furthermore, we present a straightforward method for interpreting individual dimensions and illustrate its practical applications through specific case studies. This work contributes to advancing the interpretability of language model embeddings, offering a practical and intuitive bridge between abstract representations and structured domain knowledge, which can significantly enhance their applicability in fields such as biomedical research.",
    tags: ["Large Language Models", "Knowledge Graphs", "Explainability"],
    type: "journal",
    links: {
      arxiv: "https://www.sciencedirect.com/science/article/pii/S0950705125015461",
      code: "https://github.com/Mellandd/DEIBO",
      pdf: "https://pdf.sciencedirectassets.com/271505/1-s2.0-S0950705125X00216/1-s2.0-S0950705125015461/main.pdf?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQDj%2BoPgPm4pTDgMDMvE9t0KzMCT50%2BVsoGmCU5Yhx3IAgIgGg%2BFlTUzpWfTjJnl%2FeM55jk%2B17yvd%2FyDh73xgN5bbqYqswUIXBAFGgwwNTkwMDM1NDY4NjUiDIfcVFnGSxFweVBdBiqQBSZDC%2F8VkmZbZHDeW0ElM4JzNO3jDwfAJ4eA7cQ%2BM6utZjyVGVC0b5szgK6uXJmTtOvkQ842n%2Fd797I3zkR3hhLZU8gfOqurPnauK73jP7FaasGZw%2BHiupgMi4z6mnjHw4nACD4J9ze9ABBG4IpVQTjz9WelWPKbkLon5yMN1%2Bw9CUKlOv2ywQCTXgRo1bz5Oqi2LgXbxbmPZeQG3eyRdeqiFRrVwULT5bv8FPLRJMVK5pkG%2FexzENd%2F5p4dG8PVRpi0PzvTkDKSyhvW4HOxFChTh6g0%2Bd9e26fdr2hv7T0nAQHxI9X5PEy3doi6r2HGf3XeC5MmlXv9sbERooqag7xaF2RXmdihniYL2UvbQcsJyj0vQt13GBZpO0dt8TN3O8D%2FlX%2B6EKulYrXDGzAKftLDWcfBJ0nnbpnttQAEM8Feob6m%2Fn9hvYtay3xJCmKum9YwtPRJBi9eQxl7E0u%2BMq1DeMUjj2D9kZjuwsRdQn1mEghRp9vniNax7bCRvWw5I95NCYtgp2Gvfp7yx7X92thUg%2BE4Vy0gwElIY7fhesi%2Br%2F61he7hy1Ay3w7VEx4Do1In8g0%2B0Hkl68Ka46eE6rBW9oFWI%2Bf0ZqGtJqR3e0Cu6s1ub%2BdGgSlQmqRh6MlDhXq06U%2FICH4MQ1pvhevIzAB0Y2a2NWw2fDQLkXCXWctN32wryb0rKkBADGNJ%2B9skQ6T2P4RlNFwYJYPjzyuSqvS7eSQ64W9XJNQ%2FkzFBmErmhOyfvonUaUEbhqpgHLx4TIYcIujqa2Xj30s94K0ZFGfmz5M0MIjWb%2FwUxp%2FUeUqkSMRvWCkNsgdAWj97KjLKs63yBP3rjJCcNMS9nIR%2BTZfidflRivRti4p29NBlsnqjMIG%2BnMwGOrEBs8S8%2FV91jYMKBTcVeDzP9B1acMK90kTkW%2FKtnqYefsaeIX522Cva1MSLTp97YzeoW3f3GH16jIjMXsziL3lJ0QyOjEVdBzKZv%2BG5dslJK5ubluoEMhmlQ87%2BfLD9iW%2Fues8Lv1l4URvWiePcP2U2x49AXNsQcJhbeUWJcKYr8jC%2BEl2WD7cGP96rrxoAnH7d6KX2XLAxJpAqzGruGUZkXnICZJSZRPjMss0qenNfJvK0&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20260207T122938Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAQ3PHCVTYWLANYYV7%2F20260207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5c143561bbaa0f6e64a5d31b109baf553d9622799b0f7d573613004652214dbf&hash=b63393528aa2c4d7293367fa50932892c62a43d3038b7b68a97f3a034a187dbc&host=68042c943591013ac2b2430a89b270f6af2c76d8dfd086a07176afe7c76c2c61&pii=S0950705125015461&tid=spdf-fed284b8-27b5-4b0f-a15e-2db97ea0d544&sid=94a858c25be8674b2c7ab654049214eb1bcbgxrqb&type=client&tsoh=d3d3LnNjaWVuY2VkaXJlY3QuY29t&rh=d3d3LnNjaWVuY2VkaXJlY3QuY29t&ua=03155d020257045a010c&rr=9ca2e4dc2e1504ae&cc=es",
    },
    featured: true,
  },
  {
    id: "long-covid",
    title: "Identifying risk factors and predicting long COVID in a Spanish cohort",
    authors: ["Antonio Guillén-Teruel", "Jose L. Mellina-Andreu", "Gabriel Reina", "Enrique González-Billalabeitia", "Ramón Rodriguez-Iborra", "José Palma", "Juan A Botía", "Alejandro Cisterna-García"],
    venue: "Scientific Reports",
    year: 2025,
    abstract: "Many studies have investigated symptoms, comorbidities, demographic factors, and vaccine effects in relation to long COVID (LC-19) across global populations. However, a number of these studies have shortcomings, such as inadequate LC-19 categorisation, lack of sex disaggregation, or a narrow focus on certain risk factors like symptoms or comorbidities alone. We address these gaps by investigating the demographic factors, comorbidities, and symptoms present during the acute phase of primary COVID-19 infection among patients with LC-19 and comparing them to typical non-Long COVID-19 patients. Additionally, we assess the impact of COVID-19 vaccination on these patients. Drawing on data from the Regional Health System of the Region of Murcia in southeastern Spain, our analysis includes comprehensive information from clinical and hospitalisation records, symptoms, and vaccination details of over 675126 patients across 10 hospitals. We calculated age and sex-adjusted odds ratios (AOR) to identify protective and risk factors for LC-19. Our findings reveal distinct symptomatology, comorbidity patterns, and demographic characteristics among patients with LC-19 versus those with typical non-Long COVID-19. Factors such as age, female sex (AOR = 1.39, adjusted p < 0.001), and symptoms like chest pain (AOR > 1.55, adjusted p < 0.001) or hyposmia (AOR > 1.5, adjusted p < 0.001) significantly increase the risk of developing LC-19. However, vaccination demonstrates a strong protective effect, with vaccinated individuals having a markedly lower risk (AOR = 0.10, adjusted p < 0.001), highlighting the importance of vaccination in reducing LC-19 susceptibility. Interestingly, symptoms and comorbidities show no significant differences when disaggregated by type of LC-19 patient. Vaccination before infection is the most important factor and notably decreases the likelihood of long COVID. Particularly, mRNA vaccines offer more protection against developing LC-19 than viral vector-based vaccines (AOR = 0.48). Additionally, we have developed a model to predict LC-19 that incorporates all studied risk factors, achieving a balanced accuracy of 73% and ROC-AUC of 0.80.",
    tags: ["Machine Learning", "Predictive Modeling", "Model Evaluation"],
    type: "journal",
    links: {
      arxiv: "https://www.nature.com/articles/s41598-025-94765-w",
      code: "https://provia.inf.um.es/longcovid",
      pdf: "https://www.nature.com/articles/s41598-025-94765-w.pdf"
    },
    featured: true,
  },
  {
    id: "go3",
    title: "GO3: A fast and lightweight library for semantic similarity of GO terms and genes",
    authors: ["Jose L. Mellina-Andreu", "Alejandro Cisterna-García", "Juan A Botía"],
    venue: "SoftwareX, 35, 102755",
    year: 2026,
    abstract: "Motivation: Calculation of semantic similarity of Gene Ontology (GO) term subsets is a fundamental task in functional genomics, comparative studies, and biomedical data integration. Existing tools, primarily in Python or R, often face severe limitations in performance when scaling to large annotation datasets. Results: We present go3, the first high-performance, Python-compatible library written in Rust that supports multiple semantic similarity metrics for GO terms and genes. go3 supports both pairwise and batch computations, optimized using Rust’s parallelism and memory safety. Compared to GOATOOLS, the state of the art, it achieves up to 5x speedup and 25x lower memory footprint when loading the GO ontology and gene annotations, and up to x 10 3 speedup when calculating semantic similarities between genes, while preserving output compatibility. Availability and implementation: go3 is implemented in Rust and available through Python 3. It is accessible in GitHub: (https://github.com/Mellandd/GO3).",
    tags: ["Python", "Rust", "High-Performance Computing", "Research Software"],
    type: "journal",
    links: {
      arxiv: "https://www.sciencedirect.com/science/article/pii/S2352711026002475",
      code: "https://github.com/Mellandd/GO3",
    },
  },
  {
    id: "coexp",
    title: "Multi-Network Co-expression Analysis Enhances Biological Insights from Single-Cell Gene Expression",
    authors: ["Alicia Gómez-Pascual", "Araks Martirosyan", "Katja Hebestreit", "Andrew Kottick", "Michelle Mighdoll", "Victor Hanson-Smith", "Jose L. Mellina-Andreu", "Alejandro Cisterna", "Matthew G. Holt", "Grant Belgard", "Sebastian Guelfi", "Juan A. Botía"],
    venue: "Interdisciplinary Sciences: Computational Life Sciences ",
    year: 2026,
    abstract: "With the advent of single-cell and single-nucleus RNA sequencing (sc/snRNA-seq), we can build cell-type-specific gene co-expression networks (GCNs). However, the high sparsity of scRNA-seq data limits GCN construction. We present scCoExpNets, a framework to create and annotate single-cell GCNs. For each cell-type cluster, scCoExpNets generates an initial GCN (T0) from its expression matrix. To reduce sparsity, pseudo-cells are created and used to build an alternative GCN (T1). This process is repeated through several iterations, thus creating multiple matrices and multiple GCNs for the same cell type. scCoExpNets was applied to an snRNA-seq dataset from the substantia nigra pars compacta (SNpc) from post-mortem samples of 13 controls and 14 Parkinson’s disease (PD) cases. Thanks to the creation of multiple GCNs for each cell type cluster, scCoExpNets detected that 95.84% of the T0 modules change their gene composition after sparsity reduction. In consequence, new biological annotations emerge, including 183 Ti GO subgraphs not detected at previous iterations, 159 GO subgraphs that expanded, and 157 GO subgraphs that specialized T0 GO subgraphs. Finally, we showcase the capabilities of scCoExpNets to detect a well-maintained dopaminergic module enriched with ferroptosis suppressors (Padj<0.004), which was replicated in two independent SNpc datasets (3.39 and 12.17 Z-summary score). The scCoExpNets R package and the GCNs created for all cell types are available on GitHub.",
    tags: ["Network Analysis", "Graph-Based Methods", "Research Software"],
    type: "journal",
    links: {
      arxiv: "https://link.springer.com/article/10.1007/s12539-025-00806-3",
      code: "https://github.com/aliciagp/scCoExpNets",
      pdf: "https://link.springer.com/content/pdf/10.1007/s12539-025-00806-3.pdf",
    },
  },
];

export const allTags = Array.from(new Set(papers.flatMap((p) => p.tags))).sort();

export const allTypes: PaperType[] = ["journal", "conference", "preprint", "poster", "talk"];
