import { useEffect, useState } from "react"
var apiRouteUrl = "http://localhost:5002/api"


export const App = () => {
  const [assumptions, setAssumptions] = useState(null)
  const [error, setError] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)

  useEffect(() => {
    const askAgent = async () => {
      setIsGenerating(true)
      await fetch(`${apiRouteUrl}/base-setting`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Origin": window.location.origin,
          "Access-Control-Request-Method": "GET, OPTIONS",
          "Access-Control-Request-Headers": "*",
        },
      })
        .then(res => {
          if (res.ok === false) { setError(true); setIsGenerating(false) }
          else return Promise.resolve(res.clone().json())
        })
        .then(res => {
          const res_list = res.output
          if (res_list !== undefined) { setAssumptions(res_list[1].assumptions); setIsGenerating(false) }
          else { setIsGenerating(false); setAssumptions(["Successfully processed.",]) }
        })
        .catch(err => { setError(true); setAssumptions(null); setIsGenerating(false) })
    }

    if (!assumptions) askAgent()
  }, [assumptions])


  return (
    <div className="container content">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            VersionHQ | Test App
          </a>
          <div role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true" style={{ backgroundColor: "black" }}></span>
            <span aria-hidden="true" style={{ backgroundColor: "black" }}></span>
            <span aria-hidden="true" style={{ backgroundColor: "black" }}></span>
            <span aria-hidden="true" style={{ backgroundColor: "black" }}></span>
          </div>
        </div>
      </nav>

      <div className="container" style={{ minHeight: "500px", padding: "20px" }}>
        <h1>Hello World</h1>
        {isGenerating && <p>...processing...</p>}
        {error && <p>Something went wrong. Check if you run <a href="https://github.com/versionHQ/multi-agent-system">the backend</a>.</p>}
        {assumptions &&
          <div>
            <p>Assumptions to test:</p>
            {assumptions.map((item, i) => <p key={i}>{item}</p>)}
          </div>
        }
      </div>

      <hr style={{ width: "100%", margin: 0 }} />

      <footer style={{ minWidth: "100%" }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px" }}>
          <p>
            &copy; 2024-{new Date().getFullYear()}&nbsp;Version IO Sdn Bhd. All Rights Reserved.
          </p>
          <div>
            <a className="has-text-dark" href="https://versi0n.io" target="_blank" rel="noreferrer" style={{ marginRight: "20px", textDecoration: "underline" }} aria-label="footer item">
              Home
            </a>
            <a className="has-text-dark" href="https://home.versi0n.io" target="_blank" rel="noreferrer" style={{ marginRight: "20px", textDecoration: "underline" }} aria-label="footer item">
              About
            </a>
          </div>
        </div>
      </footer >
    </div>

  )
}
