import { ComponentGenerator } from "./component-generator";


export class SearchInput implements ComponentGenerator
{
	public inputContainerEl: HTMLElement;
	public inputWrapperEl: HTMLElement;
	public inputEl: HTMLInputElement;
	public clearButtonEl: HTMLElement;

	insert(container: HTMLElement): SearchInput 
	{
		this.inputContainerEl = container.createDiv({ cls: "search-input-container" });
		this.inputWrapperEl = this.inputContainerEl.createDiv({ cls: "search-input-wrapper" });
		this.inputEl = this.inputWrapperEl.createEl("input");
		this.inputEl.setAttribute("enterkeyhint", "search");
		this.inputEl.setAttribute("type", "search");
		this.inputEl.setAttribute("spellcheck", "false");
		this.inputEl.setAttribute("placeholder", "Search...");
		this.clearButtonEl = this.inputWrapperEl.createDiv({ cls: "search-input-clear-button", attr: { "aria-label": "Clear search" } });

		return this;
	}
	
}
