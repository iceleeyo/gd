package com.gudeng.commerce.gd.customer.service;

import java.util.List;
import java.util.Map;

import com.gudeng.commerce.gd.customer.dto.NpsOfferPriceDTO;
import com.gudeng.commerce.gd.customer.dto.NpsPurchaseDTO;
import com.gudeng.commerce.gd.customer.entity.NpsPurchaseEntity;


public interface NpsPurchaseService extends BaseService<NpsPurchaseDTO>{
	
	public Long insert(NpsPurchaseEntity entity) throws Exception;

	/**
	 * 插入农批商采购信息
	 * @param map
	 * @return
	 * @throws Exception
	 */
	public Long insert(Map<String, Object> map) throws Exception; 
	/**
	 * 更新农批商采购信息
	 * @param map
	 * @return
	 * @throws Exception
	 */
	public Integer update(NpsPurchaseEntity entity) throws Exception;	
	/**
	 * 更新农批商采购信息状态
	 * @param map
	 * @return
	 * @throws Exception
	 */
	public Integer updateStatus(Map<String, Object> map) throws Exception;	
	/**
	 * 删除农批商采购信息状态（逻辑删除）
	 * @param map
	 * @return
	 * @throws Exception
	 */
	public Integer delete(Map<String, Object> map) throws Exception;	
	
	
	public NpsPurchaseDTO getNpsPurchaseById(Map<String, Object> parasMap)throws Exception;
	public List<NpsPurchaseDTO> getList(Map<String, Object> parasMap)throws Exception;
	
	
	public int getTotal(Map<String, Object> parasMap)throws Exception;
	
	public NpsOfferPriceDTO getPriceById(int purchaseId)throws Exception;
	
	
	/**
	 * 未报价总条数
	 * @param parsMap
	 * @return
	 * @throws Exception
	 */
	public int getNoPurchaseListTotal(Map<String, Object> map) throws Exception;
	
	/**
	 * 未报价列表
	 * @param parsMap
	 * @return
	 * @throws Exception
	 */
	public List<NpsPurchaseDTO> getNoPurchaseList(Map<String, Object> map) throws Exception;
	
	/**
	 * 已报价总条数
	 * @param parsMap
	 * @return
	 * @throws Exception
	 */
	public int getPurchaseListTotal(Map<String, Object> map) throws Exception;
	
	/**
	 * 已报价列表
	 * @param parsMap
	 * @return
	 * @throws Exception
	 */
	public List<NpsPurchaseDTO> getPurchaseList(Map<String, Object> map) throws Exception;

	/**
	 * 管理后台获取总数
	 * @param map
	 * @return
	 */
	public int getBackgroundTotal(Map<String, Object> map);

	/**
	 * 管理后台获取分页列表
	 * @param map
	 * @return
	 */
	public List<NpsPurchaseDTO> getBackgroundList(Map<String, Object> map);
	
	
	/**
	 * 已结束总条数
	 * @param parsMap
	 * @return
	 * @throws Exception
	 */
	public int getEndPurchaseListTotal(Map<String, Object> map) throws Exception;
	
	/**
	 * 已结束报价列表
	 * @param parsMap
	 * @return
	 * @throws Exception
	 */
	public List<NpsPurchaseDTO> getEndPurchaseList(Map<String, Object> map) throws Exception;
	public void updateSeeCount(Map<String, Object> paramMap) throws Exception;
}
