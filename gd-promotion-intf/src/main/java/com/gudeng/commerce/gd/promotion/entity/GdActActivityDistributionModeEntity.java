package com.gudeng.commerce.gd.promotion.entity;

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name = "gd_act_activity_distribution_mode")
public class GdActActivityDistributionModeEntity  implements java.io.Serializable{
    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	/**
    *主键id
    */
    private Integer id;

    *活动ID
    */
    private Integer activity_id;

    *配送方式 0自提 1平台配送
    */
    private Integer type;

    @Column(name = "id")
    public Integer getId(){

    }
    public void setId(Integer id){

    }
    @Column(name = "activity_id")
    public Integer getActivity_id(){

    }
    public void setActivity_id(Integer activity_id){

    }
    @Column(name = "type")
    public Integer getType(){

    }
    public void setType(Integer type){

    }
}