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
      pipelineTitle: "PDF Digitization Project",
      pipelineDescription:
        "This project was initiated to meet the client's need for transforming a collection of scanned PDFs into structured, accurate, and searchable metadata. The client required an automated solution capable of handling large volumes of historical documents efficiently. By leveraging OCR technology, data cleaning techniques, and intelligent metadata extraction methods, the delivered solution significantly improved the client's document organization, retrieval processes, and laid the groundwork for scaling their archival system from 1,000 to over 80,000 documents.",
      cards: [
        {
          title: "I - Extract",
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
          title: "II - Transform",
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
          title: "III - Load",
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
      pipelineTitle: "CSC Migration Project",
      pipelineDescription:
        "Migrated legacy content from Adobe CMS into Adobe Experience Manager (AEM), standardizing metadata, aligning content to predefined taxonomy, and transforming pages into modular components to facilitate better content management.",
      cards: [
        {
          title: "I - Extract",
          steps: [
            {
              title: "Legacy Content Assessment",
              description:
                "Identified and cataloged existing content and metadata from legacy Adobe CMS, focusing on content relevancy and structure. Extracted metadata into structured formats for review and preparation.",
              icon: <FaFileAlt className="text-emerald-400 text-4xl mt-4" />,
            },
            {
              title: "Initial Metadata Extraction",
              description:
                "Used automated extraction rules to gather essential metadata fields such as titles, authors, tags, and creation dates. Organized initial data into Excel and JSON files for streamlined processing.",
              icon: (
                <FaFileSignature className="text-emerald-400 text-4xl mt-4" />
              ),
            },
          ],
        },
        {
          title: "II - Transform",
          steps: [
            {
              title: "Metadata Validation & Normalization",
              description:
                "Implemented data validation rules to ensure metadata compliance with AEM schemas. Normalized fields by correcting date formats, tags, and removing duplicate or incorrect entries, reducing metadata errors by over 70%.",
              icon: <FaBroom className="text-emerald-400 text-4xl mt-4" />,
            },
            {
              title: "Taxonomy Mapping & Compliance",
              description:
                "Mapped existing metadata to predefined taxonomy structures in AEM, enforcing strict adherence to content categorization and metadata completeness requirements. Ensured over 90% accuracy in taxonomy alignment.",
              icon: <FaListAlt className="text-emerald-400 text-4xl mt-4" />,
            },
            {
              title: "Page & Component Transformation",
              description:
                "Converted legacy HTML and metadata into reusable AEM components using automated scripts. Transformed approximately 1000+ pages into modular AEM-compatible structures.",
              icon: <FaUserTag className="text-emerald-400 text-4xl mt-4" />,
            },
          ],
        },
        {
          title: "III - Load",
          steps: [
            {
              title: "Migration Execution",
              description:
                "Executed Groovy-based migration scripts to systematically load validated content into AEM. Monitored and managed migration workflows, ensuring reliable ingestion and immediate error logging.",
              icon: (
                <FaCheckCircle className="text-emerald-400 text-4xl mt-4" />
              ),
            },
            {
              title: "Post-Migration Quality Assurance",
              description:
                "Conducted comprehensive post-migration checks to validate accuracy, proper rendering, and metadata integrity. Reduced post-migration corrections by identifying and addressing discrepancies early.",
              icon: <FaFileCsv className="text-emerald-400 text-4xl mt-4" />,
            },
          ],
        },
      ],
    },
    {
      pipelineTitle: "Mailbox Migration Project",
      pipelineDescription:
        "Transitioned mailbox services from on-premises Exchange Server 2019 to Exchange Online, ensuring data integrity, compliance, and scalability with Microsoft 365.",
      cards: [
        {
          title: "I - Extract",
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
          title: "II - Transform",
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
          title: "III - Load",
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
      pipelineTitle: "CRTC Data Engineering Pipeline",
      pipelineDescription:
        "Built a robust pipeline to support CanCon compliance by integrating, cleaning, and enriching metadata from authoritative and external sources. The structured output enables real-time monitoring, validation, and reporting of Canadian content across broadcasters.",
      cards: [
        {
          title: "I - Ingest",
          steps: [
            {
              title: "CBC Metadata Extraction",
              description:
                "Connected to bilingual CBC databases to extract artist, track, contributor, and MAPL metadata. Ensured segregation of English and French content for accurate compliance classification.",
              icon: <FaFileAlt className="text-emerald-400 text-4xl mt-4" />,
            },
            {
              title: "External Enrichment (Quansic, MusicBrainz)",
              description:
                "Queried supplementary APIs to enrich existing records with ISNIs, contributor roles, and missing MAPL data. Applied fuzzy matching and conditional logic to prevent overwrites.",
              icon: (
                <FaFileSignature className="text-emerald-400 text-4xl mt-4" />
              ),
            },
          ],
        },
        {
          title: "II - Clean & Transform",
          steps: [
            {
              title: "Deduplication & Normalization",
              description:
                "Applied fuzzy matching, casing normalization, and ID validation to remove duplicates and align metadata fields across sources.",
              icon: <FaBroom className="text-emerald-400 text-4xl mt-4" />,
            },
            {
              title: "MAPL Logic & Schema Mapping",
              description:
                "Calculated MAPL flags using custom logic and mapped all entities into a relational schema designed for tracking artists, tracks, and contributors.",
              icon: <FaListAlt className="text-emerald-400 text-4xl mt-4" />,
            },
            {
              title: "Track/Contributor Linking",
              description:
                "Established relationships between artists, lyricists, and recordings to ensure audit-ready lineage from source to compliance report.",
              icon: <FaUserTag className="text-emerald-400 text-4xl mt-4" />,
            },
          ],
        },
        {
          title: "III - Load & Validate",
          steps: [
            {
              title: "Database Integration",
              description:
                "Loaded enriched metadata into a relational SQL Server database with indexing on key fields (ISRC, artist ID) to optimize query speed and report generation.",
              icon: (
                <FaCheckCircle className="text-emerald-400 text-4xl mt-4" />
              ),
            },
            {
              title: "Web App Integration",
              description:
                "Exposed a CRUD-enabled web app for analysts to manage data, validate MAPL compliance, and generate station-level reports with real-time visibility.",
              icon: <FaFileCsv className="text-emerald-400 text-4xl mt-4" />,
            },
          ],
        },
      ],
    },
  ];

  return (
    <>
      {pipelines.map((pipeline, idx) => (
        <ETLPipeline
          key={idx}
          pipelineTitle={pipeline.pipelineTitle}
          pipelineDescription={pipeline.pipelineDescription}
          cards={pipeline.cards}
        />
      ))}
    </>
  );
}
