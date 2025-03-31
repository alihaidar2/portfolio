"use client";

import {
  FaFileAlt,
  FaFileSignature,
  FaBroom,
  FaListAlt,
  FaUserTag,
  FaCheckCircle,
  FaFileCsv,
  FaClipboardCheck,
  FaCloudUploadAlt,
  FaEnvelopeOpenText,
  FaExchangeAlt,
  FaKey,
} from "react-icons/fa";
import ETLPipeline from "./ETLPipeline";

export default function MigrationProjects() {
  const pipelines = [
    {
      pipelineTitle: "PDF Archive Digitization",
      pipelineDescription:
        "This project was initiated to meet the client's need for transforming a collection of scanned PDFs into structured, accurate, and searchable metadata. The client required an automated solution capable of handling large volumes of historical documents efficiently. By leveraging OCR technology, data cleaning techniques, and intelligent metadata extraction methods, the delivered solution significantly improved the client's document organization, retrieval processes, and laid the groundwork for scaling their archival system from 1,000 to over 80,000 documents.",
      pipelineTools: "Tools & Tech: ",
      cards: [
        {
          title: "Extract",
          steps: [
            {
              title: "Document Intake & Preprocessing",
              description:
                "Processed over 1,000 scanned PDFs, rotating pages for uniformity and removing or correcting poor-quality scans.",
              icon: <FaFileAlt className="text-emerald-400 text-4xl mt-4" />,
            },
            {
              title: "OCR Setup & Text Extraction",
              description:
                "Configured Tesseract OCR, refining parameters through multiple iterations to significantly enhance text extraction quality, particularly for lower-quality scans.",
              icon: (
                <FaFileSignature className="text-emerald-400 text-4xl mt-4" />
              ),
            },
          ],
        },
        {
          title: "Transform",
          steps: [
            {
              title: "Text Cleaning & Noise Filtering",
              description:
                "Applied regex and heuristic methods to remove gibberish sequences, excessive whitespace, and OCR artifacts, greatly reducing text noise and improving readability.",
              icon: <FaBroom className="text-emerald-400 text-4xl mt-4" />,
            },
            {
              title: "Metadata Field Extraction",
              description:
                "Enhanced metadata extraction accuracy through rules-based approaches, achieving higher reliability by cross-validating extracted fields (titles, publishers, years) against ISBNdb and Google Books APIs.",
              icon: <FaListAlt className="text-emerald-400 text-4xl mt-4" />,
            },
            {
              title: "Location, Author & Entity Recognition",
              description:
                "Matched extracted entities against comprehensive lists of Canadian locations and utilized internal entity-recognition tools for author identification, substantially reducing false positives.",
              icon: <FaUserTag className="text-emerald-400 text-4xl mt-4" />,
            },
          ],
        },
        {
          title: "Load",
          steps: [
            {
              title: "Validation & QA Checks",
              description:
                "Performed validation using custom rules and document structure cross-referencing, improving metadata reliability by identifying and correcting inaccuracies.",
              icon: (
                <FaCheckCircle className="text-emerald-400 text-4xl mt-4" />
              ),
            },
            {
              title: "Export to Structured Format",
              description:
                "Successfully exported structured and validated metadata into standardized CSV files, ensuring data completeness through automated integrity checks.",
              icon: <FaFileCsv className="text-emerald-400 text-4xl mt-4" />,
            },
          ],
        },
      ],
    },
    {
      pipelineTitle: "Legacy Web Content Migration",
      pipelineDescription:
        "Engineered a structured ETL pipeline to migrate unstandardized web content and metadata from a legacy CMS into a modern, modular content management system. Developed tools for cataloging, validation, and transformation, enabling scalable content ingestion and taxonomy compliance for public-facing web platforms.",
      pipelineTools: "Tools & Tech: ",

      cards: [
        {
          title: "Extract",
          steps: [
            {
              title: "Legacy Content Cataloging",
              description:
                "Indexed and catalogued thousands of pages from the legacy CMS, extracting relevant metadata and content blocks into structured inventories using automated rules and grouping logic.",
              icon: <FaFileAlt className="text-emerald-400 text-4xl mt-4" />,
            },
            {
              title: "Metadata Extraction & Structuring",
              description:
                "Exported metadata fields such as titles, tags, and creation dates into structured formats (CSV/JSON) for validation and normalization in downstream steps.",
              icon: (
                <FaFileSignature className="text-emerald-400 text-4xl mt-4" />
              ),
            },
          ],
        },
        {
          title: "Transform",
          steps: [
            {
              title: "Validation & Normalization",
              description:
                "Ran rule-based validation scripts to flag incomplete or malformed metadata, applying normalization rules to unify fields (e.g., date formats, tag casing, duplicates).",
              icon: <FaBroom className="text-emerald-400 text-4xl mt-4" />,
            },
            {
              title: "Taxonomy Mapping",
              description:
                "Mapped metadata fields to predefined taxonomy structures, enforcing alignment across content categories and ensuring consistent tagging and classification.",
              icon: <FaListAlt className="text-emerald-400 text-4xl mt-4" />,
            },
            {
              title: "Content Transformation",
              description:
                "Converted HTML pages and static content blocks into reusable components compatible with the target CMS schema, enabling modular design and content reuse at scale.",
              icon: <FaUserTag className="text-emerald-400 text-4xl mt-4" />,
            },
          ],
        },
        {
          title: "Load",
          steps: [
            {
              title: "Migration Execution",
              description:
                "Used custom scripts to batch-ingest validated and transformed content into the new CMS platform, logging results and handling errors for content or format mismatches.",
              icon: (
                <FaCheckCircle className="text-emerald-400 text-4xl mt-4" />
              ),
            },
            {
              title: "Post-Migration QA",
              description:
                "Ran post-migration verification checks to ensure correct rendering, taxonomy alignment, and metadata integrity. Logged discrepancies for manual review and updated reports in real time.",
              icon: <FaFileCsv className="text-emerald-400 text-4xl mt-4" />,
            },
          ],
        },
      ],
    },
    {
      pipelineTitle: "Exchange Server to Cloud Migration ",
      pipelineDescription:
        "Transitioned mailbox services from on-premises Exchange Server 2019 to Exchange Online, ensuring data integrity, compliance, and scalability with Microsoft 365.",
      pipelineTools: "Tools & Tech: ",

      cards: [
        {
          title: "Extract",
          steps: [
            {
              title: "Mailbox Data Export",
              description:
                "Exported complete mailbox contents, including emails, attachments, calendars, tasks, contacts, and folder structures into standardized .pst files using Exchange Server's native tools.",
              icon: (
                <FaEnvelopeOpenText className="text-emerald-400 text-4xl mt-4" />
              ),
            },
            {
              title: "Data Parsing & Extraction",
              description:
                "Parsed exported .pst files to extract structured mailbox items and metadata, ensuring integrity and completeness through rigorous validation.",
              icon: (
                <FaExchangeAlt className="text-emerald-400 text-4xl mt-4" />
              ),
            },
          ],
        },
        {
          title: "Transform",
          steps: [
            {
              title: "Format Conversion",
              description:
                "Converted emails and attachments from .pst format to .eml format, ensuring accurate preservation of metadata, headers, and timestamps compatible with Exchange Online.",
              icon: (
                <FaClipboardCheck className="text-emerald-400 text-4xl mt-4" />
              ),
            },
            {
              title: "Metadata Standardization",
              description:
                "Normalized and standardized metadata, addressing inconsistencies such as special characters, folder structures, and date formats to align precisely with Exchange Online's schema.",
              icon: <FaKey className="text-emerald-400 text-4xl mt-4" />,
            },
          ],
        },
        {
          title: "Load",
          steps: [
            {
              title: "Secure API Integration",
              description:
                "Configured OAuth2 authentication using Azure Active Directory, enabling secure communication with Microsoft Graph API to upload mailbox data safely.",
              icon: (
                <FaCloudUploadAlt className="text-emerald-400 text-4xl mt-4" />
              ),
            },
            {
              title: "Mailbox Data Import",
              description:
                "Executed bulk imports of emails, attachments, calendar entries, and tasks into Exchange Online, handling rate limits and ensuring data accuracy through robust error handling.",
              icon: <FaFileAlt className="text-emerald-400 text-4xl mt-4" />,
            },
            {
              title: "Post-Migration QA",
              description:
                "Performed thorough validation and quality assurance to confirm that migrated mailbox data matched the source exactly, addressing any discrepancies promptly.",
              icon: (
                <FaCheckCircle className="text-emerald-400 text-4xl mt-4" />
              ),
            },
          ],
        },
      ],
    },
    {
      pipelineTitle: "CanCon Metadata Consolidation and Tracking System",
      pipelineDescription:
        "Built a metadata engineering pipeline to consolidate and enrich content data from multiple sources, enabling automated compliance tracking against national broadcasting standards. Created a structured, query-optimized database and developed a full-stack web application for analysts to interact with, validate, and report on metadata in real time.",
      pipelineTools: "Tools & Tech: C#, .NET, and SQL Server",

      cards: [
        {
          title: "Extract",
          steps: [
            {
              title: "Multi-source Metadata Collection",
              description:
                "Collected metadata from multiple authoritative and supplementary content databases, including language-specific catalogues and global registries.",
              icon: <FaFileAlt className="text-emerald-400 text-4xl mt-4" />,
            },
            {
              title: "Unique Identifier Enrichment",
              description:
                "Augmented core metadata with external identifiers (e.g., ISNI, IPN) to improve record traceability and enrich contributor profiles.",
              icon: (
                <FaFileSignature className="text-emerald-400 text-4xl mt-4" />
              ),
            },
          ],
        },
        {
          title: "Transform",
          steps: [
            {
              title: "Deduplication & Normalization",
              description:
                "Used fuzzy matching and validation logic to consolidate overlapping records, standardize field formats, and resolve naming conflicts.",
              icon: <FaBroom className="text-emerald-400 text-4xl mt-4" />,
            },
            {
              title: "Schema Mapping & Compliance Logic",
              description:
                "Mapped contributors, recordings, and metadata to a structured relational schema. Applied logic to classify content eligibility against broadcast compliance frameworks.",
              icon: <FaListAlt className="text-emerald-400 text-4xl mt-4" />,
            },
            {
              title: "Data Enrichment with External Sources",
              description:
                "Filled metadata gaps using third-party open data APIs without overwriting verified core fields, preserving data provenance.",
              icon: <FaUserTag className="text-emerald-400 text-4xl mt-4" />,
            },
          ],
        },
        {
          title: "Load",
          steps: [
            {
              title: "Database Integration & Optimization",
              description:
                "Loaded structured data into a relational database, with indexing applied to key fields for efficient querying and analytics.",
              icon: (
                <FaCheckCircle className="text-emerald-400 text-4xl mt-4" />
              ),
            },
            {
              title: "Web Interface & Reporting",
              description:
                "Built an internal tool for reviewing contributor metadata and monitoring regulatory thresholds, with support for CRUD, real-time flag validation, and audit trails.",
              icon: <FaFileCsv className="text-emerald-400 text-4xl mt-4" />,
            },
          ],
        },
      ],
    },
  ];

  return (
    <>
      {pipelines.map((pipeline, index) => (
        <div key={index} className="w-full">
          <ETLPipeline
            pipelineTitle={pipeline.pipelineTitle}
            pipelineDescription={pipeline.pipelineDescription}
            pipelineTools={pipeline.pipelineTools}
            cards={pipeline.cards}
          />
          {index < pipelines.length - 1 && (
            <hr className="my-7 border-t border-gray-500 w-full max-w-4xl mx-auto" />
          )}
        </div>
      ))}
    </>
  );
}
