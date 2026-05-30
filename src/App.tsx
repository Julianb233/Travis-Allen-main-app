import { useMemo, useState } from "react";
import {
  AlertTriangle,
  Bike,
  BookOpen,
  Boxes,
  Building2,
  CheckCircle2,
  ClipboardList,
  FileText,
  FolderKanban,
  Link2,
  LockKeyhole,
  MapPin,
  Megaphone,
  Menu,
  Search,
  Settings2,
  ShieldCheck,
  SlidersHorizontal,
  Smartphone,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import serviceCatalog from "./data/tbt-service-catalog.json";
import assetHub from "./data/tbt-onboarding-asset-hub.json";

type SectionKey =
  | "dashboard"
  | "services"
  | "intake"
  | "assets"
  | "training"
  | "marketing"
  | "admin";

type ServiceType = {
  name: string;
  notes?: string;
};

type ServicePrice = {
  service: string;
  priceDisplay: string;
  notes?: string;
};

type RiderSkill = {
  code: string;
  label: string;
};

type HubSection = {
  name: string;
  driveFolderId: string;
  purpose: string;
  status?: string;
};

type HubAsset = {
  section: string;
  name: string;
  type: string;
  targetFileId: string;
};

type MissingAsset = {
  name: string;
  neededFormats: string[];
  notes: string;
};

const catalog = serviceCatalog as unknown as {
  bikeBrands: string[];
  bikeUses: string[];
  brandGuidelines: { colors: { name: string; hex: string }[] };
  locations: string[];
  riderSkillLevels: RiderSkill[];
  servicePricing: ServicePrice[];
  serviceTypes: ServiceType[];
};

const hub = assetHub as unknown as {
  hub: { name: string; driveFolderId: string; url: string; purpose: string };
  sections: HubSection[];
  assets: HubAsset[];
  missingAssets: MissingAsset[];
};

const navItems: { key: SectionKey; label: string; icon: LucideIcon }[] =
  [
    { key: "dashboard", label: "Dashboard", icon: FolderKanban },
    { key: "services", label: "Service Catalog", icon: Wrench },
    { key: "intake", label: "Bike Intake", icon: ClipboardList },
    { key: "assets", label: "Asset Hub", icon: Boxes },
    { key: "training", label: "Training", icon: BookOpen },
    { key: "marketing", label: "Marketing", icon: Megaphone },
    { key: "admin", label: "Admin", icon: Settings2 },
  ];

const phaseCards = [
  {
    title: "Phase 1",
    label: "Web portal MVP",
    status: "In build",
    icon: Building2,
  },
  {
    title: "Phase 2",
    label: "Expo iOS / Android",
    status: "Next",
    icon: Smartphone,
  },
  {
    title: "Phase 3",
    label: "Visual analysis",
    status: "Later",
    icon: SlidersHorizontal,
  },
];

const riderSkillLabels = catalog.riderSkillLevels.map((skill) => skill.label);

function App() {
  const [activeSection, setActiveSection] = useState<SectionKey>("dashboard");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const activeNav = navItems.find((item) => item.key === activeSection);

  return (
    <div className="app-shell">
      <aside className={`sidebar ${mobileNavOpen ? "sidebar-open" : ""}`}>
        <div className="brand-block">
          <div className="brand-mark">TBT</div>
          <div>
            <p className="eyeline">Racing Portal</p>
            <h1>Franchise Control</h1>
          </div>
        </div>

        <nav className="nav-list" aria-label="Portal sections">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.key}
                className={`nav-item ${activeSection === item.key ? "active" : ""}`}
                type="button"
                onClick={() => {
                  setActiveSection(item.key);
                  setMobileNavOpen(false);
                }}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="sidebar-status">
          <ShieldCheck size={18} />
          <div>
            <strong>Controlled Access</strong>
            <span>Drive hub gated through one franchise resource point.</span>
          </div>
        </div>
      </aside>

      <div className="main-area">
        <header className="topbar">
          <button
            className="icon-button mobile-only"
            type="button"
            aria-label="Open portal navigation"
            onClick={() => setMobileNavOpen(true)}
          >
            <Menu size={21} />
          </button>
          <div>
            <span className="section-label">{activeNav?.label}</span>
            <h2>{sectionTitle(activeSection)}</h2>
          </div>
          <a className="hub-link" href={hub.hub.url} target="_blank" rel="noreferrer">
            <Link2 size={17} />
            <span>Open Hub</span>
          </a>
        </header>

        {mobileNavOpen ? (
          <button
            className="mobile-scrim"
            aria-label="Close portal navigation"
            type="button"
            onClick={() => setMobileNavOpen(false)}
          />
        ) : null}

        <main className="content-area">
          {activeSection === "dashboard" && <Dashboard />}
          {activeSection === "services" && <ServiceCatalog />}
          {activeSection === "intake" && <Intake />}
          {activeSection === "assets" && <AssetHub />}
          {activeSection === "training" && (
            <ResourceCollection
              title="Training + Playbooks"
              description="Franchise training and operational playbook shortcuts from the controlled hub."
              sectionNames={["04_Training_Playbooks"]}
            />
          )}
          {activeSection === "marketing" && (
            <ResourceCollection
              title="Marketing + Trailer / Sticker Resources"
              description="Campaign, trailer, sticker, race-day, and stunt-video resources available now."
              sectionNames={["02_Trailer_Sticker_Marketing"]}
              includeMissing
            />
          )}
          {activeSection === "admin" && <Admin />}
        </main>
      </div>
    </div>
  );
}

function sectionTitle(section: SectionKey) {
  const titles: Record<SectionKey, string> = {
    dashboard: "One access point for TBT operations",
    services: "Service catalog and pricing reference",
    intake: "Bike and service intake builder",
    assets: "Franchise asset hub",
    training: "Training and playbook library",
    marketing: "Marketing resource library",
    admin: "Missing assets and controls",
  };
  return titles[section];
}

function Dashboard() {
  const serviceInfoAssets = countAssetsFor("03_Service_Bike_Info");
  const trainingAssets = countAssetsFor("04_Training_Playbooks");
  const marketingAssets = countAssetsFor("02_Trailer_Sticker_Marketing");

  return (
    <section className="view-stack">
      <div className="hero-panel">
        <div className="hero-copy">
          <h3>TBT Racing franchise resource portal</h3>
          <p>
            A controlled web portal for onboarding, service intake, training,
            marketing files, and admin follow-up. The app reads from the Drive
            hub and service catalog manifests already imported into the repo.
          </p>
        </div>
        <div className="control-card">
          <LockKeyhole size={22} />
          <strong>Single access point</strong>
          <span>Grant or revoke franchise resource access from the curated hub.</span>
        </div>
      </div>

      <div className="metric-grid">
        <MetricCard label="Bike brands" value={catalog.bikeBrands.length} icon={Bike} />
        <MetricCard label="Service types" value={catalog.serviceTypes.length} icon={Wrench} />
        <MetricCard label="Locations" value={catalog.locations.length} icon={MapPin} />
        <MetricCard label="Hub assets" value={hub.assets.length} icon={Boxes} />
      </div>

      <div className="phase-row">
        {phaseCards.map((card) => {
          const Icon = card.icon;
          return (
            <div className="phase-card" key={card.title}>
              <Icon size={21} />
              <div>
                <span>{card.title}</span>
                <strong>{card.label}</strong>
              </div>
              <em>{card.status}</em>
            </div>
          );
        })}
      </div>

      <div className="two-column">
        <div className="panel">
          <div className="panel-heading">
            <h3>Resource coverage</h3>
            <span>From asset hub manifest</span>
          </div>
          <div className="coverage-list">
            <CoverageRow label="Service + Bike Info" value={serviceInfoAssets} />
            <CoverageRow label="Training Playbooks" value={trainingAssets} />
            <CoverageRow label="Marketing Resources" value={marketingAssets} />
            <CoverageRow label="Missing Asset Groups" value={hub.missingAssets.length} alert />
          </div>
        </div>

        <div className="panel">
          <div className="panel-heading">
            <h3>Brand colors</h3>
            <span>From service catalog</span>
          </div>
          <div className="swatch-grid">
            {catalog.brandGuidelines.colors.map((color) => (
              <div className="swatch-row" key={color.name}>
                <span className="swatch" style={{ background: color.hex }} />
                <div>
                  <strong>{color.name}</strong>
                  <span>{color.hex}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCatalog() {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();
  const filteredPrices = catalog.servicePricing.filter((item) =>
    item.service.toLowerCase().includes(normalizedQuery),
  );

  return (
    <section className="view-stack">
      <div className="tool-header">
        <div>
          <h3>Service menu</h3>
          <p>
            Service types and pricing are pulled from the local catalog manifest.
            Pricing still needs client confirmation before it is treated as final
            public-facing pricing.
          </p>
        </div>
        <label className="search-box">
          <Search size={18} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search pricing"
          />
        </label>
      </div>

      <div className="catalog-layout">
        <div className="panel">
          <div className="panel-heading">
            <h3>Service types</h3>
            <span>{catalog.serviceTypes.length} options</span>
          </div>
          <div className="service-type-list">
            {catalog.serviceTypes.map((service) => (
              <div className="service-type" key={service.name}>
                <Wrench size={17} />
                <div>
                  <strong>{service.name}</strong>
                  {service.notes ? <span>{service.notes}</span> : null}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="panel">
          <div className="panel-heading">
            <h3>Pricing reference</h3>
            <span>{filteredPrices.length} rows</span>
          </div>
          <div className="pricing-table">
            {filteredPrices.map((item) => (
              <div className="price-row" key={item.service}>
                <div>
                  <strong>{item.service}</strong>
                  {item.notes ? <span>{item.notes}</span> : null}
                </div>
                <em>{item.priceDisplay}</em>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Intake() {
  const [brand, setBrand] = useState(catalog.bikeBrands[0] ?? "");
  const [skill, setSkill] = useState(riderSkillLabels[0] ?? "");
  const [use, setUse] = useState(catalog.bikeUses[0] ?? "");
  const [service, setService] = useState(catalog.serviceTypes[0]?.name ?? "");
  const [location, setLocation] = useState(catalog.locations[0] ?? "");

  const pricingMatches = useMemo(() => {
    const serviceWords = service.toLowerCase().replace(/[^a-z ]/g, " ").split(" ");
    return catalog.servicePricing.filter((price) =>
      serviceWords.some((word) => word.length > 4 && price.service.toLowerCase().includes(word)),
    );
  }, [service]);

  return (
    <section className="view-stack">
      <div className="tool-header">
        <div>
          <h3>Bike + service intake</h3>
          <p>
            Capture the first-pass service request shape. This is local portal
            state for v1 and can become the shared form model for Expo later.
          </p>
        </div>
      </div>

      <div className="intake-grid">
        <div className="panel form-panel">
          <SelectField label="Bike brand" value={brand} options={catalog.bikeBrands} onChange={setBrand} />
          <SelectField
            label="Rider skill"
            value={skill}
            options={riderSkillLabels}
            onChange={setSkill}
          />
          <SelectField label="Bike use" value={use} options={catalog.bikeUses} onChange={setUse} />
          <SelectField
            label="Service type"
            value={service}
            options={catalog.serviceTypes.map((item) => item.name)}
            onChange={setService}
          />
          <SelectField label="Location" value={location} options={catalog.locations} onChange={setLocation} />
        </div>

        <div className="summary-panel">
          <div className="summary-top">
            <ClipboardList size={23} />
            <div>
              <span>Intake summary</span>
              <h3>{brand}</h3>
            </div>
          </div>
          <dl className="summary-list">
            <div>
              <dt>Rider</dt>
              <dd>{skill}</dd>
            </div>
            <div>
              <dt>Use</dt>
              <dd>{use}</dd>
            </div>
            <div>
              <dt>Service</dt>
              <dd>{service}</dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>{location}</dd>
            </div>
          </dl>
          <div className="price-match">
            <strong>Pricing matches</strong>
            {pricingMatches.length ? (
              pricingMatches.slice(0, 4).map((price) => (
                <span key={price.service}>
                  {price.service}: {price.priceDisplay}
                </span>
              ))
            ) : (
              <span>Manual pricing review needed for this service.</span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function AssetHub() {
  return (
    <section className="view-stack">
      <div className="tool-header">
        <div>
          <h3>{hub.hub.name}</h3>
          <p>{hub.hub.purpose}</p>
        </div>
        <a className="primary-action" href={hub.hub.url} target="_blank" rel="noreferrer">
          <FolderKanban size={18} />
          Open Drive Hub
        </a>
      </div>

      <div className="section-grid">
        {hub.sections.map((section) => {
          const assets = assetsFor(section.name);
          return (
            <div
              className={`hub-section-card ${section.status ? "needs-source" : ""}`}
              key={section.driveFolderId}
            >
              <div className="hub-section-top">
                <FolderKanban size={20} />
                <span>{assets.length} assets</span>
              </div>
              <h3>{humanizeSection(section.name)}</h3>
              <p>{section.purpose}</p>
              {section.status ? <em>{section.status.replaceAll("_", " ")}</em> : null}
              <a href={driveFolderUrl(section.driveFolderId)} target="_blank" rel="noreferrer">
                Open section
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function ResourceCollection({
  title,
  description,
  sectionNames,
  includeMissing = false,
}: {
  title: string;
  description: string;
  sectionNames: string[];
  includeMissing?: boolean;
}) {
  const assets = hub.assets.filter((asset) => sectionNames.includes(asset.section));

  return (
    <section className="view-stack">
      <div className="tool-header">
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>

      {includeMissing ? <MissingAssetsBanner /> : null}

      <div className="asset-list">
        {assets.map((asset) => (
          <a
            className="asset-row"
            href={driveFileUrl(asset.targetFileId)}
            target="_blank"
            rel="noreferrer"
            key={`${asset.section}-${asset.targetFileId}`}
          >
            <FileText size={18} />
            <div>
              <strong>{asset.name}</strong>
              <span>{humanizeSection(asset.section)}</span>
            </div>
            <Link2 size={17} />
          </a>
        ))}
      </div>
    </section>
  );
}

function Admin() {
  return (
    <section className="view-stack">
      <div className="admin-band">
        <AlertTriangle size={24} />
        <div>
          <h3>Required follow-up before brand/trailer sections are complete</h3>
          <p>
            These blockers should remain visible until TBT uploads the missing
            source files or confirms alternate source locations.
          </p>
        </div>
      </div>

      <MissingAssetsBanner />

      <div className="two-column">
        <div className="panel">
          <div className="panel-heading">
            <h3>Access model</h3>
            <span>Operational rule</span>
          </div>
          <div className="access-steps">
            <Step icon={CheckCircle2} title="Invite" text="Grant access to the curated Drive hub." />
            <Step icon={ShieldCheck} title="Expose" text="Show approved hub resources inside the portal." />
            <Step icon={LockKeyhole} title="Revoke" text="Remove hub access when a franchisee is paused or cut off." />
          </div>
        </div>

        <div className="panel">
          <div className="panel-heading">
            <h3>Confirmation needed</h3>
            <span>Before public launch</span>
          </div>
          <ul className="plain-list">
            <li>Confirm public versus internal service pricing.</li>
            <li>Confirm active, coming soon, and franchise-only locations.</li>
            <li>Confirm whether exact bike model selection is required in v1.</li>
            <li>Confirm whether Full Bike Prep needs a distinct workflow.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function MetricCard({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: number;
  icon: LucideIcon;
}) {
  return (
    <div className="metric-card">
      <Icon size={21} />
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

function CoverageRow({ label, value, alert = false }: { label: string; value: number; alert?: boolean }) {
  return (
    <div className="coverage-row">
      <span>{label}</span>
      <strong className={alert ? "alert-text" : ""}>{value}</strong>
    </div>
  );
}

function SelectField({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  return (
    <label className="select-field">
      <span>{label}</span>
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function MissingAssetsBanner() {
  return (
    <div className="missing-grid">
      {hub.missingAssets.map((item) => (
        <div className="missing-card" key={item.name}>
          <AlertTriangle size={20} />
          <div>
            <h3>{item.name}</h3>
            <p>{item.notes}</p>
            <div className="format-list">
              {item.neededFormats.map((format) => (
                <span key={format}>{format}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Step({
  icon: Icon,
  title,
  text,
}: {
  icon: LucideIcon;
  title: string;
  text: string;
}) {
  return (
    <div className="step-row">
      <Icon size={18} />
      <div>
        <strong>{title}</strong>
        <span>{text}</span>
      </div>
    </div>
  );
}

function countAssetsFor(sectionName: string) {
  return hub.assets.filter((asset) => asset.section === sectionName).length;
}

function assetsFor(sectionName: string) {
  return hub.assets.filter((asset) => asset.section === sectionName);
}

function humanizeSection(sectionName: string) {
  return sectionName.replace(/^\d+_/, "").replaceAll("_", " ");
}

function driveFolderUrl(folderId: string) {
  return `https://drive.google.com/drive/folders/${folderId}`;
}

function driveFileUrl(fileId: string) {
  return `https://drive.google.com/file/d/${fileId}/view`;
}

export default App;
