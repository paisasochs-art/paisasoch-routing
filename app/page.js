export default function Home() {
  return (
    <div style={{ fontFamily: "Inter, sans-serif", background: "#F5F1E6" }}>

      {/* NAVBAR */}
      <header style={{
        background: "#0F2E4E",
        color: "white",
        padding: "15px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <div style={{ fontWeight: "700", fontSize: "20px", color: "#D4A64A" }}>
          PaisaSoch
        </div>

        <nav style={{ display: "flex", gap: "20px", fontSize: "14px" }}>
          <a href="#" style={navLink}>Gold Rate Today</a>
          <a href="#" style={navLink}>Calculators</a>
          <a href="#" style={navLink}>Gold Offers</a>
          <a href="#" style={navLink}>Buying Guides</a>
          <a href="#" style={navLink}>Blog</a>
        </nav>

        <div style={{ display: "flex", gap: "10px" }}>
          <button style={goldBtn}>Check Gold Price</button>
          <button style={loginBtn}>Login</button>
        </div>
      </header>

      {/* HERO */}
      <section style={{
        background: "#0F2E4E",
        color: "white",
        textAlign: "center",
        padding: "60px 20px"
      }}>
        <h1 style={{ fontSize: "36px", marginBottom: "10px" }}>
          Gold Price Insights & Calculators for <span style={{ color: "#D4A64A" }}>India</span>
        </h1>

        <p style={{ opacity: 0.8, marginBottom: "30px" }}>
          Track city-wise gold prices, compare rates, and calculate jewellery costs
        </p>

        {/* PRICE CARDS */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          marginBottom: "20px"
        }}>
          <PriceCard type="22K Gold" price="₹14,271" />
          <PriceCard type="24K Gold" price="₹15,580" />
        </div>

        <p style={{ fontSize: "12px", opacity: 0.6, marginBottom: "20px" }}>
          Last updated: Live
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
          <button style={goldBtn}>Check Gold Rate Today →</button>
          <button style={outlineBtn}>Compare City Prices →</button>
        </div>
      </section>

      {/* SEARCH SECTION */}
      <section style={{ textAlign: "center", padding: "40px 20px" }}>
        <h2>Gold Rate Today in Your City</h2>

        <input
          placeholder="Search any Indian city..."
          style={{
            marginTop: "15px",
            padding: "12px",
            width: "300px",
            borderRadius: "8px",
            border: "1px solid #ccc"
          }}
        />

        <div style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          flexWrap: "wrap"
        }}>
          {["Hyderabad", "Mumbai", "Delhi", "Chennai", "Bangalore"].map(city => (
            <button key={city} style={chip}>{city}</button>
          ))}
        </div>
      </section>

      {/* CALCULATORS */}
      <section style={{ padding: "40px 20px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
          Recommended Tools for You
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))",
          gap: "20px",
          maxWidth: "1000px",
          margin: "0 auto"
        }}>
          <ToolCard title="Gold Jewellery Price Calculator" />
          <ToolCard title="Gold Making Charges Calculator" />
          <ToolCard title="Gold Price Calculator" />
          <ToolCard title="Wedding Gold Budget Calculator" />
        </div>
      </section>

      {/* TRUST SECTION */}
      <section style={{ padding: "40px 20px", textAlign: "center" }}>
        <h2>Why Indians Trust PaisaSoch</h2>

        <div style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          flexWrap: "wrap"
        }}>
          <div style={trustCard}>Transparent gold calculations</div>
          <div style={trustCard}>Planner-based decision tools</div>
          <div style={trustCard}>Data-driven insights</div>
          <div style={trustCard}>Built for Indian families</div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        background: "#0F2E4E",
        color: "white",
        padding: "40px 20px"
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))",
          gap: "20px",
          maxWidth: "1100px",
          margin: "0 auto"
        }}>
          <div>
            <h3 style={{ color: "#D4A64A" }}>PaisaSoch</h3>
            <p style={{ opacity: 0.7 }}>
              India's Gold Buying Intelligence Platform.
            </p>
          </div>

          <div>
            <h4>Intelligence</h4>
            <p>Gold Rate Today</p>
            <p>Buying Intelligence</p>
            <p>Gold Trends</p>
          </div>

          <div>
            <h4>Tools</h4>
            <p>All Calculators</p>
            <p>Budget Calculator</p>
          </div>

          <div>
            <h4>Resources</h4>
            <p>Buying Guides</p>
            <p>Blog</p>
          </div>
        </div>
      </footer>

    </div>
  );
}

/* COMPONENTS */

function PriceCard({ type, price }) {
  return (
    <div style={{
      background: "#183A5A",
      padding: "20px",
      borderRadius: "12px",
      minWidth: "200px"
    }}>
      <p style={{ opacity: 0.7 }}>{type}</p>
      <h2 style={{ color: "#D4A64A" }}>{price}</h2>
      <p style={{ fontSize: "12px", opacity: 0.6 }}>per gram</p>
    </div>
  );
}

function ToolCard({ title }) {
  return (
    <div style={{
      background: "white",
      padding: "20px",
      borderRadius: "12px"
    }}>
      <h3>{title}</h3>
      <button style={{ marginTop: "10px" }}>Open →</button>
    </div>
  );
}

/* STYLES */

const navLink = { color: "white", textDecoration: "none" };

const goldBtn = {
  background: "#D4A64A",
  border: "none",
  padding: "10px 15px",
  borderRadius: "6px",
  fontWeight: "600"
};

const outlineBtn = {
  border: "1px solid white",
  padding: "10px 15px",
  borderRadius: "6px",
  background: "transparent",
  color: "white"
};

const loginBtn = {
  background: "#1e3a5f",
  border: "none",
  padding: "10px 15px",
  borderRadius: "6px",
  color: "white"
};

const chip = {
  padding: "8px 12px",
  borderRadius: "20px",
  border: "1px solid #ccc",
  background: "white"
};

const trustCard = {
  background: "white",
  padding: "15px",
  borderRadius: "10px"
};
