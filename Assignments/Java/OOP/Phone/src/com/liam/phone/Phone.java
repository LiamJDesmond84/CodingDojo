package com.liam.phone;

public abstract class Phone {
	protected String versionNumber;
	
    protected int batteryPercentage;
    
    private String carrier;
    
    private String ringTone;
    
    public Phone(String versionNumber, int batteryPercentage, String carrier, String ringTone){
        this.versionNumber = versionNumber;
        this.batteryPercentage = batteryPercentage;
        this.carrier = carrier;
        this.ringTone = ringTone;
    }

    public abstract void displayInfo();


	public String getVersionNumber() {
		return this.versionNumber;
	}

	public int getBatteryPercentage() {
		return this.batteryPercentage;
	}

	public String getCarrier() {
		return this.carrier;
	}

	public String getRingTone() {
		return this.ringTone;
	}

	
	
}

