Here's a practical summary:

---

### 💾 Disk Space

- Base install (bare minimum, everything disabled): ~32 GB. With templates and starter content, expect **35–40 GB**.
- A full UE5 install with assets can reach **~115 GB**. Plan accordingly for projects.

---

### 🖥️ Hardware

| | Minimum | Recommended |
|---|---|---|
| **CPU** | Quad-core, 2.5 GHz | 6-core i7/Ryzen 7 or better |
| **RAM** | 8 GB | 32–64 GB |
| **GPU** | GTX 470 / Radeon 6870 | RTX 3060 / RX 6700 XT or better |
| **Storage** | HDD | **NVMe SSD** strongly preferred |
| **OS** | Windows 10 64-bit | Windows 10 64-bit v20H2+ |

For smooth development in 2025, the practical minimum is a 6-core CPU, RTX 3060 or RX 6700 XT, 16 GB RAM, and a 512 GB SSD.

---

### 🔒 Security Concerns

A few worth noting:

- **Epic Games Launcher required** — it runs in the background, has auto-update behavior, and phones home. Not unusual for game engines, but worth knowing.
- Antivirus/firewall software can interfere — it may quarantine UE executables. You'll likely need to add UE folders to your antivirus allowlist.
- Visual Studio (with the "Game development with C++" workload) and .NET Framework are required dependencies on Windows. These add to install size and attack surface.
- **Epic account required** to download — they collect usage/telemetry data per their privacy policy.

---

**Bottom line for your use case (teaching/exploration):** A modern mid-range machine with 16 GB RAM and an SSD will run it fine. It's not lightweight software.