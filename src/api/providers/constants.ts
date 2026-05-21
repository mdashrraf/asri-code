import { Package } from "../../shared/package"

export const DEFAULT_HEADERS = {
	"HTTP-Referer": "https://github.com/asri-ai/asri",
	"X-Title": "Asri",
	"User-Agent": `Asri/${Package.version}`,
}
