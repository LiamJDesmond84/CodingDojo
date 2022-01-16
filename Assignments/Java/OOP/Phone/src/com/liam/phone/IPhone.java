package com.liam.phone;

public class IPhone extends Phone implements Ringable {
	
	public IPhone(String versionNumber, int batteryPercentage, String carrier, String ringTone) {
        super(versionNumber, batteryPercentage, carrier, ringTone);
    }
    @Override
    public String ring() {
		return this.getRingTone();
    }
    @Override
    public String unlock() {
    	return "Unlocked with fingerprint scanner";
    }
    @Override
    public void displayInfo() {
        System.out.println("Version Number: " + this.getVersionNumber());
        System.out.println("Batter Percentage: " + this.getBatteryPercentage());
        System.out.println("Carrier: " + this.getCarrier());
        System.out.println("RingTone: " + this.getRingTone());
    }
}

