export class FlowList {
    constructor(containerEl) {
        this.checkedList = [];
        this.containerEl = containerEl;
        this.flowListEl = this.containerEl.createDiv({ cls: 'flow-list' });
    }
    addItem(name, key, value, onChange) {
        let item = this.flowListEl.createDiv({ cls: 'flow-item' });
        let checkbox = item.createEl('input', { type: 'checkbox' });
        checkbox.checked = value;
        if (checkbox.checked)
            this.checkedList.push(key);
        checkbox.addEventListener('change', (evt) => {
            if (checkbox.checked) {
                if (!this.checkedList.includes(key))
                    this.checkedList.push(key);
            }
            else {
                if (this.checkedList.includes(key))
                    this.checkedList.remove(key);
            }
        });
        checkbox.addEventListener('change', (evt) => onChange(checkbox.checked));
        let label = item.createDiv({ cls: 'flow-label' });
        label.setText(name);
        return item;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxvdy1saXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmxvdy1saXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sT0FBTyxRQUFRO0lBS3BCLFlBQVksV0FBd0I7UUFGcEMsZ0JBQVcsR0FBYSxFQUFFLENBQUM7UUFHMUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBRXBFLENBQUM7SUFFRCxPQUFPLENBQUMsSUFBWSxFQUFFLEdBQVcsRUFBRSxLQUFjLEVBQUUsUUFBa0M7UUFDcEYsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUMzRCxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO1FBQzVELFFBQVEsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksUUFBUSxDQUFDLE9BQU87WUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUVoRCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDM0MsSUFBSSxRQUFRLENBQUMsT0FBTyxFQUFFO2dCQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDO29CQUNsQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTthQUMzQjtpQkFDSTtnQkFDSixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQztvQkFDakMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7YUFDN0I7UUFDRixDQUFDLENBQUMsQ0FBQztRQUVILFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUd6RSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUM7UUFDbEQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVwQixPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuZXhwb3J0IGNsYXNzIEZsb3dMaXN0IHtcclxuXHRjb250YWluZXJFbDogSFRNTEVsZW1lbnQ7XHJcblx0Zmxvd0xpc3RFbDogSFRNTEVsZW1lbnQ7XHJcblx0Y2hlY2tlZExpc3Q6IHN0cmluZ1tdID0gW107XHJcblxyXG5cdGNvbnN0cnVjdG9yKGNvbnRhaW5lckVsOiBIVE1MRWxlbWVudCkge1xyXG5cdFx0dGhpcy5jb250YWluZXJFbCA9IGNvbnRhaW5lckVsO1xyXG5cdFx0dGhpcy5mbG93TGlzdEVsID0gdGhpcy5jb250YWluZXJFbC5jcmVhdGVEaXYoeyBjbHM6ICdmbG93LWxpc3QnIH0pO1xyXG5cclxuXHR9XHJcblxyXG5cdGFkZEl0ZW0obmFtZTogc3RyaW5nLCBrZXk6IHN0cmluZywgdmFsdWU6IGJvb2xlYW4sIG9uQ2hhbmdlOiAodmFsdWU6IGJvb2xlYW4pID0+IHZvaWQpOiBIVE1MRWxlbWVudCB7XHJcblx0XHRsZXQgaXRlbSA9IHRoaXMuZmxvd0xpc3RFbC5jcmVhdGVEaXYoeyBjbHM6ICdmbG93LWl0ZW0nIH0pO1xyXG5cdFx0bGV0IGNoZWNrYm94ID0gaXRlbS5jcmVhdGVFbCgnaW5wdXQnLCB7IHR5cGU6ICdjaGVja2JveCcgfSk7XHJcblx0XHRjaGVja2JveC5jaGVja2VkID0gdmFsdWU7XHJcblx0XHRpZiAoY2hlY2tib3guY2hlY2tlZCkgdGhpcy5jaGVja2VkTGlzdC5wdXNoKGtleSlcclxuXHJcblx0XHRjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZ0KSA9PiB7XHJcblx0XHRcdGlmIChjaGVja2JveC5jaGVja2VkKSB7XHJcblx0XHRcdFx0aWYgKCF0aGlzLmNoZWNrZWRMaXN0LmluY2x1ZGVzKGtleSkpXHJcblx0XHRcdFx0XHR0aGlzLmNoZWNrZWRMaXN0LnB1c2goa2V5KVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdGlmICh0aGlzLmNoZWNrZWRMaXN0LmluY2x1ZGVzKGtleSkpXHJcblx0XHRcdFx0XHR0aGlzLmNoZWNrZWRMaXN0LnJlbW92ZShrZXkpXHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldnQpID0+IG9uQ2hhbmdlKGNoZWNrYm94LmNoZWNrZWQpKTtcclxuXHJcblxyXG5cdFx0bGV0IGxhYmVsID0gaXRlbS5jcmVhdGVEaXYoeyBjbHM6ICdmbG93LWxhYmVsJyB9KTtcclxuXHRcdGxhYmVsLnNldFRleHQobmFtZSk7XHJcblxyXG5cdFx0cmV0dXJuIGl0ZW07XHJcblx0fVxyXG5cclxufVxyXG4iXX0=