package com.example.demo.Entity;

//package com.example.StudentExample.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="MOBILES")
public class stdentity {
	
	@Id
	@Column(name="sno")
	private int sno;
	@Column(name="BrandName")
	private String BrandName;
	@Column(name="ModelName")
	private String ModelName;
	@Column(name="Price")
	private int Price;
	@Column(name="LaunchedYear")
	private String LaunchedYear;
	public int getSno() {
		return sno;
	}
	public void setSno(int sno) {
		this.sno = sno;
	}
	public String getBrandName() {
		return BrandName;
	}
	public void setBrandName(String brandName) {
		BrandName = brandName;
	}
	public String getModelName() {
		return ModelName;
	}
	public void setModelName(String modelName) {
		ModelName = modelName;
	}
	public int getPrice() {
		return Price;
	}
	public void setPrice(int price) {
		Price = price;
	}
	public String getLaunchedYear() {
		return LaunchedYear;
	}
	public void setLaunchedYear(String launchedYear) {
		LaunchedYear = launchedYear;
	}
	
	
}