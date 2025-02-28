import { AssetLoader } from "./base-asset.js";
import { AssetType, InlinePolicy, LoadMethod, Mutability } from "./asset-types.js";
import { Path } from "plugin/utils/path";
import { Settings, SettingsPage } from "plugin/settings/settings";
import { ExportLog } from "plugin/render-api/render-api";

export class CustomHeadContent extends AssetLoader
{
    constructor()
    {
        super("custom-head-content.html", "", null, AssetType.HTML, InlinePolicy.AutoHead, false, Mutability.Dynamic, LoadMethod.Default, 100000000000);
    }
    
    override async load()
    {
		if (!SettingsPage.loaded) 
		{
			return;
		}

        const customHeadPath = new Path(this.exportOptions.customHeadPath);
		
		if (customHeadPath.isEmpty)
		{
			this.data = "";
			return;
		}

        const validation = customHeadPath.validate(
			{
				allowEmpty: false,
				allowFiles: true,
				allowAbsolute: true,
				allowRelative: true,
				requireExists: true
			});

        if (!validation.valid)
        {
            this.data = "";
            ExportLog.error(validation.error + customHeadPath.path);
            return;
        }

		this.source = app.vault.getFileByPath(customHeadPath.path);
		if (!this.source)
		{
			const stat = customHeadPath.stat;
			if (stat)
			{
				this.sourceStat = {ctime: stat.ctimeMs, mtime: stat.mtimeMs, size: stat.size};
			}
		}
        this.data = await customHeadPath.readAsString() ?? "";
        await super.load();
    }
}
